const express = require('express')
const app = express()
const https = require('https')
var cron = require('node-cron')
const { env } = require('process')
const enforce = require('express-sslify')

let coinData = null
let coinMarketData = {}
let coinJSONData = {}

const getBuildPath = () => {
    let buildPath = __dirname.split("/")
    buildPath.pop()
    buildPath.push('Client')
    buildPath.push('build')
    return buildPath.join('/')
}

const getHTMLFileLocation = () => {
    let buildPath = getBuildPath().split('/')
    buildPath[buildPath.length - 1] += "/index.html"
    return buildPath.join('/')
}

getCoinGeckoCoinIDs = () => {
    let data = ''

    const options = {
        hostname: 'api.coingecko.com',
        port: 443,
        path: '/api/v3/coins/list',
        method: 'GET'
    }

    let req = https.request(options, res => {
        res.on('data', d => {
            data += d
        })
        res.on('end', () => {
            coinData = data
        })
    })
    
    req.end()
}

getCoinGeckoMarketData = currentPage => {
    let data = ''

    const options = {
        hostname: 'api.coingecko.com',
        port: 443,
        path: '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=' + currentPage + '&sparkline=false&price_change_percentage=24h',
        method: 'GET'
    }

    let request = https.request(options, res => {
        res.on('data', d => {
            data += d
        })
        res.on('end', () => {
            if (data.toString() !== '[]') {
                console.log('Fetching page ' + currentPage + ' of data.')
                data = JSON.parse(data)

                for (let coin in data) {
                    coinMarketData[data[coin].symbol] = {
                        'price_change_percentage_24h' : data[coin].price_change_percentage_24h,
                        'name' : data[coin].name
                    }
                }

                getCoinGeckoMarketData(currentPage + 1)
            } else {
                coinJSONData = {
                    ...coinMarketData
                }
                console.log('Finished fetching coin market data.')
            }
        })
    })

    request.end()
}

cron.schedule('*/5 * * * *', () => {
    coinMarketData = {}
    getCoinGeckoCoinIDs()
    getCoinGeckoMarketData(1)
})

app.use(enforce.HTTPS({trustProtoHeader: true}))
app.use(express.static(getBuildPath()));

getCoinGeckoCoinIDs()
getCoinGeckoMarketData(1)

app.get('/coins/list', (req, res) => {
    res.send(coinData)
})

app.get('/coins/list/data', (req, res) => {
    res.send(coinJSONData)
})

app.get('/coins/market_data/:coin', (req, res) => {
    const coinName = req.params.coin
    if (coinJSONData[coinName]) {
        res.json(coinJSONData[coinName])
    } else {
        res.json({
            "error" : "Coin " + coinName + " was not found."
        })
    }
})

app.get('*', (req, res) => {
    res.sendFile(getHTMLFileLocation())
})

app.listen(process.env.PORT);