import React, { useEffect, useState } from 'react';

import './styles.scss'
import { Item } from '../RuleOfThree';

interface IBestItem {
  items: Item[]
}
function BestItem({ items }: IBestItem) {
  const [bestItems, setBestItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const minRatio = Math.min.apply(Math, items.map(function (obj) { return obj.ratio; }))
    console.log('min', minRatio);
    const itemsWithMinRatio = items.filter(item => item.ratio === minRatio);
    console.log('ITEMS?', itemsWithMinRatio);
    setBestItems(itemsWithMinRatio);
  }, [items]);

  const getItemPosition = (item: Item, designatedItem: Item) => {
    
  };

  console.log('THIS SHIT IS REAL?', bestItems)
  return (
    <div>
      {bestItems && bestItems.length !== 0 && `O produto mais em conta tem preço igual a R$ ${bestItems[0]!.price}.`}
    </div>
  );
}

export default BestItem;
