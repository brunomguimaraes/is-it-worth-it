import React from 'react';
import { ReactComponent as Cart } from '../../assets/cart.svg'

import './styles.scss'
import RuleOfThree from '../../components/RuleOfThree';

function Home() {
  return (
    <div id="page-home">
      <Cart className="cartPicture"/>
      <RuleOfThree />
    </div>
  );
}

export default Home;
