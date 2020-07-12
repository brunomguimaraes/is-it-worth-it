import React, { useEffect, useState } from 'react';

import './styles.scss'
import { Item } from '../RuleOfThree';
import { position } from '../../utils/array';

interface IBestItem {
  items: Item[]
}
function BestItem({ items }: IBestItem) {
  const [bestItems, setBestItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const minRatio = Math.min.apply(Math, items.map(function (obj) { return obj.ratio; }))
    const itemsWithMinRatio = items.filter(item => item.ratio === minRatio);
    setBestItems(itemsWithMinRatio);
  }, [items]);

  const getItemPosition = (item: Item) => {
    return position(items, item);
  };

  return (
    <div>
      {bestItems && bestItems.length !== 0 && `O produto mais em conta é o ${getItemPosition(bestItems[0])} que tem preço igual a ${bestItems[0].price}.
      Seu valor por unidade de medida é R$ ${bestItems[0].ratio.toFixed(2)}/${(bestItems[0].unit)}`}
    </div>
  );
}

export default BestItem;
