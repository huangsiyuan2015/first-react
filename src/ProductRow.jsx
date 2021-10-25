import React, { Component } from "react";

export default class ProductRow extends Component {
  render() {
    const { product } = this.props;
    const { name, price, stocked } = product;

    return (
      <tr className="product-row">
        <td>{stocked ? name : <span style={{ color: "red" }}>{name}</span>}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
