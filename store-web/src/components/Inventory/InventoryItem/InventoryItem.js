import React from 'react';

const inventoryItem = ( props ) => (
  <tr>
    <td>{props.waist}</td>
    <td>{props.length}</td>
    <td>{props.style}</td>
    <td>{props.count}</td>
  </tr>
);

export default inventoryItem;
