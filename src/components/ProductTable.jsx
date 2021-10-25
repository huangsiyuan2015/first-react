import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { products } from "../data/products";

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    // fetch("http://localhost:4000/products").then(async (response) => {
    //   const products = await response.json();
    //   this.setState({ products });
    // });
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    const { filterText, onlyShowStocked } = this.props;

    let lastCategory = null;
    const rows = [];

    products.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });

    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
        lastCategory = product.category;
      }

      if (filterText && !onlyShowStocked) {
        product.name.toLowerCase().indexOf(filterText) > -1 &&
          rows.push(<ProductRow key={product.name} product={product} />);
        return;
      } else if (filterText && onlyShowStocked) {
        product.name.toLowerCase().indexOf(filterText) > -1 &&
          product.stocked &&
          rows.push(<ProductRow key={product.name} product={product} />);
        return;
      }

      if (onlyShowStocked) {
        product.stocked &&
          rows.push(<ProductRow key={product.name} product={product} />);
        return;
      }

      rows.push(<ProductRow key={product.name} product={product} />);
    });

    return (
      <table
        className="product-table"
        style={{ width: "100%", marginTop: "8px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
