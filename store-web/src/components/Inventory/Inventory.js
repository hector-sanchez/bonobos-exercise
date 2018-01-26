import React from 'react';
import capitalize from 'capitalize';

import InventoryItem from './InventoryItem/InventoryItem';

const inventory = ( props ) => props.inventory.map( ( inventoryItem, index ) => {
  return <InventoryItem
            key={inventoryItem.id}
            waist={inventoryItem.waist}
            length={inventoryItem.length}
            style={capitalize.words(inventoryItem.style)}
            count={inventoryItem.count} />
});

export default inventory;
