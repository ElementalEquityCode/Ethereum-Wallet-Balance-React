import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CoinLogo.module.css';

const CoinLogo = (props) => {
  const { src } = props;
  const { ticker } = props;
  const [image, defaultImageHandler] = useState(src);

  return (
    <img
      className={styles.coinLogo}
      alt={`${ticker} logo`}
      src={image}
      onError={() => {
        defaultImageHandler('https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png');
      }}
    />
  );
};

CoinLogo.propTypes = {
  src: PropTypes.string,
  ticker: PropTypes.string
};

export default CoinLogo;
