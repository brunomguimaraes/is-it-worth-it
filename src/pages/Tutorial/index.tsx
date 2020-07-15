import React from 'react';
import { Link } from 'react-router-dom';
import example1 from '../../assets/images/example1.jpg';
import example1price from '../../assets/images/example1price.png';

import './styles.scss'

function Tutorial() {
  return (
    <div id="page-tutorial">
      <div className={"content"}>
        <Link to="/">
          voltar
        </Link>
        <p>
          As vezes ficamos em dúvida se determinada promoção vale a pena. É comum no nosso dia a dia nos depararmos com situações como esta:
        </p>
        <img className={"tutorialPhoto"} src={example1} alt="Example 1" />
        <p>
          Será que o pack nesse caso vale a pena?
          Vamos usar nossa calculadora para verificar:
        </p>
        <p>
          Inserimos o valor de R$0.98 para 1 unidade e o valor de R$7.98 para 8 unidades. O resultado obtido será:
        </p>
        <img className={"tutorialResultPhoto"} src={example1price} alt="Example 1 Price" />
        <p>
          Ou seja, neste caso estamos pagando mais caro pelo pack!
        </p>
        <p><strong>Fique atento!</strong></p>
      </div>
    </div>
  );
}

export default Tutorial;
