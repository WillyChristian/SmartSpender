import React from 'react';
import { SvgProps } from 'react-native-svg';

import Wallet from '../../../assets/icons/wallet.svg';
import PlusWhite from '../../../assets/icons/plus-white.svg';
import MoneySpend from '../../../assets/icons/money-spend.svg';

type IconProps = {
  Wallet: React.FC<SvgProps>;
  PlusWhite: React.FC<SvgProps>;
  MoneySpend: React.FC<SvgProps>;
};

const Icon: IconProps = {
  Wallet,
  PlusWhite,
  MoneySpend,
};

export default Icon;
