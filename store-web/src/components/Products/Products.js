import React from 'react';
import capitalize from 'capitalize';

import Product from './Product/Product';

const products = (props) => props.products.map( (product, index) => {
  return <Product
              key={product.id}
              image={product.image}
              name={capitalize.words(product.name)}
              description={product.description}
              inventory={product.inventory}
              showInventory={product.showInventory}
              toggleInventoryClick={() => props.toggleInventoryClick(product.id)} />
});

export default products;
