import React from 'react';

const inventoryTable = ( props ) => (
  <div className="table-responsive-sm">
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Waist</th>
          <th scope="col">Length</th>
          <th scope="col">Style</th>
          <th scope="col">Count</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  </div>
);

export default inventoryTable;
