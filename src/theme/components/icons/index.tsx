import React from 'react';
import { SvgProps } from 'react-native-svg';

import Wallet from '../../../assets/icons/wallet.svg';
import PlusWhite from '../../../assets/icons/plus-white.svg';
import MoneySpend from '../../../assets/icons/money-spend.svg';
import Search from '../../../assets/icons/search.svg';
import PlusCTA from '../../../assets/icons/plus-cta.svg';

type IconProps = {
  Wallet: React.FC<SvgProps>;
  PlusWhite: React.FC<SvgProps>;
  MoneySpend: React.FC<SvgProps>;
  Search: React.FC<SvgProps>;
  PlusCTA: React.FC<SvgProps>;
};

const Icon: IconProps = {
  Wallet,
  PlusWhite,
  MoneySpend,
  Search,
  PlusCTA,
};

export default Icon;
