import React from "react";

function Filter({onCategoryChange}){
    function cf(event){
        onCategoryChange(event)
    }
    return (
        <select name="filter" onChange={cf}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}
export default Filter;