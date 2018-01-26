import React, { Component } from 'react';
import axios from 'axios';
import Products from '../../components/Products/Products';

class Cockpit extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products')
          .then(response => {
            const transformedProducts = response.data.products.map( product => {
              return {
                ...product,
                inventory: product.inventory.slice(0, (Math.floor(Math.random() * product.inventory.length) + 1)),
                showInventory: false
              }
            });
            this.setState( { products: transformedProducts });
          } );
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
