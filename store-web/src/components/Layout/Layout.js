import React from 'react';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
  <Aux>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Product Inventory</h1>
      <p className="lead">Lists a list of our products with their corresponding inventory.</p>
    </div>

    <main className="border-top"></main>
    <div className="container"></div>

    {props.children}
  </Aux>
);

export default layout;
