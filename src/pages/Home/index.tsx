import React from 'react';
import RuleOfThree from '../../components/RuleOfThree';
import { ReactComponent as Cart } from '../../assets/cart.svg'

import './styles.scss'

function Home() {
  return (
    <div id="page-home">
      <div className={"content"}>
        <Cart className="cartPicture" />
        <RuleOfThree />
      </div>
    </div>
  );
}

export default Home;
