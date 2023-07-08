import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CategorySmallSideBar from "./CategorySmallSideBar";
const CategorySideBar = ({
  categories,
  productCount,
  value,
  handleSliderChange,
  show,
  handleClose,
}) => {
  return (
    <>
      <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
        {/* Offcanvas for screens larger than lg */}
        <div className="d-none d-lg-block">
          <CategorySmallSideBar
            categories={categories}
            productCount={productCount}
            value={value}
            handleSliderChange={handleSliderChange}
          />
        </div>

        {/* Offcanvas for screens smaller than lg */}
        <div className="d-lg-none">
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>Lọc sản phẩm</Offcanvas.Header>
            <Offcanvas.Body>
              <div className="p-5">
                <CategorySmallSideBar
                  categories={categories}
                  productCount={productCount}
                  value={value}
                  handleSliderChange={handleSliderChange}
                />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default CategorySideBar;
