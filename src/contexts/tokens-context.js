import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import PropTypes from "prop-types";
import { Address } from "../components/objects/address";
import { ERC20Token } from "../components/objects/erc20-token";
import axios from "axios";

export const TokensContext = React.createContext({
  addresses: [],
  addEthereumAddress: () => {},
  deleteEthereumAddress: () => {},
});

export const TokensProvider = (props) => {
  const router = useRouter();
  const [addresses, setEtherAddress] = useState([]);

  const loadStoredAddresses = async (completionBlock) => {
    let addressesCopy = [];
    const fetchedAddresses = JSON.parse(localStorage.getItem("addresses"));

    if (fetchedAddresses) {
      fetchedAddresses.forEach(async (address) => {
        const fetchedAddress = new Address(
          address,
          0,
          0,
          0,
          null,
          TokensContext
        );
        await fetchedAddress.fetchDataFromZapperAPI();
        addressesCopy.push(fetchedAddress);
        setEtherAddress(addressesCopy);
        completionBlock(addressesCopy);
      });
    }
  };

  const addEthereumAddress = async (address, completion) => {
    await axios
      .get(
        `https://api.zapper.fi/v1/protocols/tokens/balances?addresses[]=${address}&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`
      )
      .then((result) => {
        let addressesCopy = [...addresses];

        let newAddress = new Address(
          address,
          0,
          result.data[address.toLowerCase()].meta[1].value,
          null
        );

        result.data[address.toLowerCase()].products[0].assets.forEach(
          (asset) => {
            const token = new ERC20Token(
              asset.symbol,
              asset.price,
              asset.balance,
              asset.balanceUSD,
              `https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/${asset.address}.png`,
              asset.balanceUSD / newAddress.addressValue,
              asset.address
            );
            newAddress.erc20Tokens.push(token);
            if (asset.symbol === "ETH") {
              newAddress.etherBalance = asset.balance;
            }
          }
        );

        addressesCopy.push(newAddress);
        setEtherAddress(addressesCopy);

        let localStorageAddresses = JSON.parse(
          localStorage.getItem("addresses")
        );

        if (localStorageAddresses) {
          localStorageAddresses.push(address);
        } else {
          localStorageAddresses = [address];
        }

        localStorage.setItem(
          "addresses",
          JSON.stringify(localStorageAddresses)
        );

        router.push(`/?address=${address}`, undefined, {
          shallow: true,
        });

        completion();
      })
      .catch((error) => {
        console.log(error);
        completion(error);
      });
  };

  const deleteEthereumAddress = (addressString) => {
    let addressesCopy = [...addresses];
    let localStorageAddresses = JSON.parse(localStorage.getItem("addresses"));

    addressesCopy = addressesCopy.filter((address) => {
      return address.address !== addressString;
    });

    localStorageAddresses = localStorageAddresses.filter((storedAddress) => {
      return storedAddress !== addressString;
    });

    localStorage.setItem("addresses", JSON.stringify(localStorageAddresses));

    setEtherAddress(addressesCopy);

    if (addressesCopy.length > 0) {
      router.push(`/?address=${addressesCopy[0].address}`, undefined, {
        shallow: true,
      });
    } else {
      router.push("/", undefined, {
        shallow: true,
      });
    }
  };

  useEffect(() => {
    loadStoredAddresses((addressesCopy) => {
      if (addressesCopy) {
        router.push(`/?address=${addressesCopy[0].address}`, undefined, {
          shallow: true,
        });
      }
    });
  }, []);

  const { children } = props;

  return (
    <TokensContext.Provider
      value={{
        addresses,
        addEthereumAddress,
        deleteEthereumAddress,
      }}
    >
      {children}
    </TokensContext.Provider>
  );
};

TokensProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
