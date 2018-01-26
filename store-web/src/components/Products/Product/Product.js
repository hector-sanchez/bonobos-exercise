import React, { Component } from 'react';

import Inventory from '../../Inventory/Inventory.js';
import InventoryTable from '../../Inventory/InventoryControls/InventoryTable';

const product = (props) => {
  let inventoryButton = props.showInventory ?
          (<p className="btn btn-secondary" onClick={props.toggleInventoryClick} >Hide Inventory <span className="badge badge-light">{props.inventory.length}</span></p>) :
            (<p className="btn btn-primary" onClick={props.toggleInventoryClick} >Show Inventory <span className="badge badge-light">{props.inventory.length}</span></p>)

  let inventory = null;

  if (props.showInventory) {
    inventory = (
        <InventoryTable>
          <Inventory inventory={props.inventory} />
        </InventoryTable>
      )
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-md-3">
            <img className="product img-responsive" src={props.image} alt={props.name} />
          </div>
          <div className="col-xs-9 col-md-9">
            <h4 className="product-name"><strong>{props.name}</strong></h4>
            <h4><small>{props.description}</small></h4>
            {inventoryButton}
            {inventory}
          </div>
        </div>
      </div>
    </div>
  )
}
export default product;
