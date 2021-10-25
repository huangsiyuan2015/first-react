import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      onlyShowStocked: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  handleCheckboxChange = () => {
    this.setState({ onlyShowStocked: !this.state.onlyShowStocked });
  };

  render() {
    const { filterText, onlyShowStocked } = this.state;

    return (
      <div
        className="filterable-product-table"
        style={{ width: "240px", margin: "0 auto" }}
      >
        <SearchBar
          filterText={filterText}
          onlyShowStocked={onlyShowStocked}
          handleCheckboxChange={this.handleCheckboxChange}
          handleInputChange={this.handleInputChange}
        />
        <ProductTable
          filterText={filterText}
          onlyShowStocked={onlyShowStocked}
        />
      </div>
    );
  }
}
