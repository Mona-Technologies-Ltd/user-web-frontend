import React from "react";
import "./SearchFilterBar.css";
import { FiSearch } from "react-icons/fi";

const SearchFilterBar = () => {
  return (
    <div className="search-filter-container">
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search here" />
      </div>
      <select className="status-dropdown">
        <option value="">Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="completed">Completed</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default SearchFilterBar;
