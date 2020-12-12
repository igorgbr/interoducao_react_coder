import React from 'react';
import Products from './../../data/produtos';

export default (props) => {
  const productList = Products.sort((a, b) => a.preço - b.preço).map(
    (product, i) => (
      <tbody key={i} className={i % 2 === 0 ? 'tableColor' : ''}>
        <td>{product.id}</td>
        <td>{product.nome}</td>
        <td>{product.preço}</td>
      </tbody>
    )
  );
  return (
    <div>
      <center>
        <table border="0">
          <tr className="tableTitle">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {productList}
        </table>
      </center>
    </div>
  );
};
