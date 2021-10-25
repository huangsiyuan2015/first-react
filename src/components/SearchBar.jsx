import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const {
      filterText,
      handleInputChange,
      onlyShowStocked,
      handleCheckboxChange,
    } = this.props;

    return (
      <div className="search-bar">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="stock"
            value={onlyShowStocked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="stock">Only show products in stock</label>
        </div>
      </div>
    );
  }
}
