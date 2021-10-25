import React, { Component } from "react";

export default class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;

    return (
      <tr
        className="product-category-row"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        <td colSpan="2">{category}</td>
      </tr>
    );
  }
}
