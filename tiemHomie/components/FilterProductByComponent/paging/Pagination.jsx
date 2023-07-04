import React from "react";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classes from "../../../pages/collection/shop_left.module.css";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div className="row align-items-center mb-4 pb-1">
                  <div className="col-12">
                    <div className="d-flex justify-content-center product_header">
                      <ReactPaginate
                        previousLabel={<AiOutlineArrowLeft />}
                        nextLabel={<AiOutlineArrowRight />}
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={onPageChange}
                        pageClassName={classes["page-item"]} // Apply the imported CSS class
                        pageLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        previousClassName={classes["page-item"]} // Apply the imported CSS class
                        previousLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        nextClassName={classes["page-item"]} // Apply the imported CSS class
                        nextLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        breakClassName={classes["page-item"]} // Apply the imported CSS class
                        breakLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        containerClassName={classes.pagination} // Apply the imported CSS class
                        activeClassName={classes.active} // Apply the imported CSS class
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
  );
};

export default Pagination;
