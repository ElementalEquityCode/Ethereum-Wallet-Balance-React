import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { productionServerAPI as server } from '../../../../Objects/Axios';
import styles from './Change24Hours.module.css';

class Change24Hours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      change24Hour: 'N/A'
    };
  }

  componentDidMount = () => {
    const { ticker } = this.props;

    server.get(`/coins/market_data/${ticker.toLowerCase()}`).then((response) => {
      if (response.data.price_change_percentage_24h) {
        this.setState({
          change24Hour: response.data.price_change_percentage_24h
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { change24Hour } = this.state;
    let className = null;
    let caret = <span className={styles.caret}>▲ </span>;

    if (change24Hour >= 0.00 && className !== 'N/A') {
      className = `${styles.greenDay}`;
    } else if (change24Hour < 0.00) {
      className = `${styles.redDay}`;
      caret = <span className={styles.caret}>▼ </span>;
    }

    return (
      <Typography
        className={className}
        color="textSecondary"
        noWrap
        variant="body2"
      >
        {change24Hour !== 'N/A' ? caret : null}
        {change24Hour === 'N/A' ? change24Hour : `${change24Hour.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
      </Typography>
    );
  }
}

Change24Hours.propTypes = {
  ticker: PropTypes.string
};

export default Change24Hours;
