import React from 'react';
import example1 from '../../assets/images/example1.jpg';
import example1price from '../../assets/images/example1price.png';

import './styles.scss'

function Tutorial() {
  return (
    <div id="page-tutorial">
      <div className={"content"}>
        <p>
          As vezes ficamos em dúvida se determinada promoção vale a pena. É comum no nosso dia a dia nos depararmos com situações como esta:
        </p>
        <img className={"tutorialPhoto"} src={example1} alt="Example 1" />
        <p>
          Será que o pack nesse caso vale a pena?
          Vamos usar nossa calculadora para verificar:
        </p>
        <p>
          O resultado obtido será:
        </p>
        <img className={"tutorialResultPhoto"} src={example1price} alt="Example 1 Price" />
        <p>
          Ou seja, neste caso estamos pagando mais caro pelo pack!
          Fique atento!
        </p>
      </div>
    </div>
  );
}

export default Tutorial;
