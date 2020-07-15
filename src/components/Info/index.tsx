import React from 'react';

import './styles.scss'
import Footer from '../Footer';

function Info() {
  return (
    <>
      <div id="info">
        <h1>Comprar produtos em quantidade nem sempre é o melhor negócio</h1>
        <h2>Embalagem tamanho família pode sair mais cara que o item avulso.</h2>
        <p>Todos queremos economizar. Inspirado pelo mercado atacadista,
        normalmente o consumidor opta por embalagens econômicas de um único produto("packs, grades, etc")
        procurando sempre o melhor preço, no entanto, nem sempre isso é verdade.
        Existem casos em que as embalagens ditas "econômicas" saem mais caro do que o preço unitário do item.
      </p>
        <p>
          Segundo o Procon, os mercados não são obrigados a vender por preços mais baixos os produtos apresentados em pacotes.
          No entanto, quando essas embalagens configuram ofertas, se não houver vantagem de preço, pode estar caracterizada uma propaganda enganosa.
      </p>
        <h2>Dicas para economizar no supermercado</h2>
        <h3>Use a calculadora de mercado</h3>
        <p>Leve sua calculadora e confira com cuidado se os preços são bons para você.
        Além do preço, considere a quantidade. Por exemplo, o produto X custa R$ 5 e o Y, R$ 8, mas o X tem 500 gramas e o Y, 1 quilo. Fazendo as contas, o Y é mais vantajoso.
      </p>
        <h3>Faça uma lista de compras</h3>
        <p>Planejamento evita desperdícios.
        Elabore uma lista prévia do que você realmente precisa e, mais importante, siga-a com disciplina.
      </p>
        <h3>Prefira comprar na segunda quinzena do mês</h3>
        <p>A maioria dos consumidores compra no início do mês. Na segunda quinzena há uma queda normal de vendas, e as empresas ficam mais propícias a fazer promoções para melhorar o fluxo de caixa.
      </p>
        <h3>Nunca vá às compras com fome</h3>
        <p>A fome atrapalha na hora de calcular a quantidade de produtos de que você realmente precisa. Resultado: acaba comprando coisas demais. Ou, então, cai na tentação e compra alimentos que não estavam na lista.
      </p>
        <h3>Cuidado com os truques e 'armadilhas' de marketing</h3>
        <p>Tudo no supermercado é feito para você gastar mais: a música, a claridade, os corredores longos, a posição dos produtos etc.. Chocolates e doces costumam ser colocados ao alcance das crianças. Produtos essenciais costumam ficar no fundo para fazer o consumidor percorrer todos os setores.
      </p>
        <h2>Diferença entre Varejo e Atacado?</h2>
        <p>O varejo tem como principal público o consumidor final, principalmente porque vende produtos em quantidades menores, ou seja, por unidade.
        Por outro lado, o atacado é mais voltado para revendedores, pois os volumes são maiores.
      </p>
      </div>
      <Footer />
    </>
  );
}

export default Info;
