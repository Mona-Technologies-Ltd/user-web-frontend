import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const CustomGrid = ({
  columns,
  data,
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const generatePaginationNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="custom-grid">
      {/* Grid Header */}
      <div className="grid-header">
        {columns.map((column, index) => (
          <div key={index} className="grid-cell">
            {column.title}
          </div>
        ))}
      </div>

      {/* Grid Body */}
      <div className="grid-body">
        {data?.map((item, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="grid-cell">
                {column.render
                  ? column.render(item[column.key], item)
                  : item[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="grid-footer">
        <div className="pagination-info">
          Showing {startIndex + 1} to {endIndex} of {totalItems} results
        </div>
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Icon icon="mdi:chevron-left" width="20" height="20" />
          </button>
          {generatePaginationNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-button ${
                page === currentPage ? "active" : ""
              }`}
              onClick={() =>
                typeof page === "number" ? onPageChange(page) : null
              }
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Icon icon="mdi:chevron-right" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

CustomGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomGrid;
