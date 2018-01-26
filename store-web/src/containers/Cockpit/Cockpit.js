import React, { Component } from 'react';
import Products from '../../components/Products/Products';

class Cockpit extends Component {
  state = {
    products: [
      {
        id: 1, name: 'washed chinos',
        image: 'https://bonobos-prod-s3.imgix.net/products/26061/original/PNT_WC_GreyDogs_Slim_hero1.jpg?1476915862=&w=1200&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=900&h=1',
        description: 'All-purpose, 100% cotton chinos with our signature curved waistband for a better, more natural fit. Available in four fits, a full range of colors, and original contrast pocket liners.',
        inventory: [
          {id: 1, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 2, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 3, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 11, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 21, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 31, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 41, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 51, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 12, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 22, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 32, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 42, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 52, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 13, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 23, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 33, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 43, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 53, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 14, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 24, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 34, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 44, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 54, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 15, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 25, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 35, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 45, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 55, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 16, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 26, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 36, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 46, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 56, waist: 36, length: 28, style: 'stone cutters', count: 5},
          {id: 17, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 27, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 37, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 47, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 57, waist: 36, length: 28, style: 'stone cutters', count: 5},
        ],
        showInventory: true
      },
      {
        id: 2, name: 'jetsetter jeans',
        image: 'https://bonobos-prod-s3.imgix.net/products/26709/original/hjh9u9m0441y5qv9qlg6qvy4owanulkj.jpg?1477944668=&auto=format%2Ccompress&dpr=1&q=75&crop=false&fit=clip&w=400&h=1',
        description: 'All-purpose, 100% cotton chinos with our signature curved waistband for a better, more natural fit. Available in four fits, a full range of colors, and original contrast pocket liners.',
        inventory: [
          {id: 1, waist: 28, length: 32, style: 'jet blues', count: 11},
          {id: 2, waist: 38, length: 40, style: 'grey dogs', count: 15},
          {id: 3, waist: 26, length: 30, style: 'jetstrams', count: 1},
          {id: 4, waist: 32, length: 32, style: 'blackjacks', count: 7},
          {id: 5, waist: 36, length: 28, style: 'stone cutters', count: 5},
        ],
        showInventory: false
      }
    ]
  }

  toggleInventoryClickHandler = (productId) => {
    const productIndex = this.state.products.findIndex(p => {
      return p.id === productId
    });

    const product = { ...this.state.products[productIndex] };
    product.showInventory = !product.showInventory;

    const products = [...this.state.products];
    products[productIndex] = product;

    this.setState( { products: products } );
  }

  render() {
    return (
      <Products products={this.state.products}
        toggleInventoryClick={(productId) => this.toggleInventoryClickHandler(productId)} />
    );
  }
}

export default Cockpit;
