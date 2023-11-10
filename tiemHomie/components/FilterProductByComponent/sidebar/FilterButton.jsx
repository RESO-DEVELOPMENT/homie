import React from "react";
import { AiFillFilter } from "react-icons/ai";
const FilterButton = ({ handleShow }) => {
  return (
    <button className="btn d-lg-none text-end border" onClick={handleShow}>
      <AiFillFilter />
    </button>
  );
};

export default FilterButton;
