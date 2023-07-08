import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "rc-slider/assets/index.css";
import ProductCard from "../../components/section/productCard/ProductCard";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import SortBySelected from "../../components/FilterProductByComponent/sortBySelected/SortBySelected";
import Pagination from "../../components/FilterProductByComponent/paging/Pagination";
import SideBar from "../../components/FilterProductByComponent/sidebar/SideBar";
import { AiFillFilter } from "react-icons/ai";
import { getAllProduct } from "../../action/menuApi";
import FilterButton from "../../components/FilterProductByComponent/sidebar/FilterButton";
import CategorySideBar from "../../components/FilterProductByComponent/sidebar/CategorySideBar";

const ShopLeft = ({
  products,
  categories,
  category,
  filteredProducts,
  productCount,
  collections,
}) => {
  const router = useRouter();

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  // LOGIC TO FETCH DATA
  useEffect(() => {
    setData(filteredProducts);
  }, [filteredProducts]);

  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      case "price":
        sortedData = sortedData.sort((a, b) => a.sellingPrice - b.sellingPrice);
        break;
      case "price-desc":
        sortedData = sortedData.sort((a, b) => b.sellingPrice - a.sellingPrice);
        break;
      default:
        break;
    }

    setData(sortedData);
  };

  const handleSortOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    sortData(selectedOption);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Sidebar (offCanvas)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Price filter
  const [value, setValue] = useState([0, 1000000]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const filteredData = filteredProducts.filter(
      (product) =>
        product.sellingPrice >= value[0] && product.sellingPrice <= value[1]
    );

    let sortedData = [...filteredData];
    if (selectedSortOption === "price") {
      sortedData = filteredData.sort((a, b) => a.sellingPrice - b.sellingPrice);
    } else if (selectedSortOption === "price-desc") {
      sortedData = filteredData.sort((a, b) => b.sellingPrice - a.sellingPrice);
      //more types sorted here
    }

    setData(sortedData);
  }, [value, products, selectedSortOption, setData, setSelectedSortOption]);

  return (
    <div className="main_content">
      <BreadCrumb
        descriptionTitle={category.name}
        title={category.name}
        middlePath="Danh mục"
      ></BreadCrumb>
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12 d-flex justify-content-between product_header">
                  <SortBySelected
                    handleSortOptionChange={handleSortOptionChange}
                    selectedSortOption={selectedSortOption}
                  />
                  <FilterButton handleShow={handleShow} />
                </div>
              </div>
              <div className="row shop_container">
                {paginatedData.map((product) => (
                  <div key={product.id} className="col-md-4">
                    <ProductCard
                      productData={product}
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                ))}
              </div>
              <Pagination
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </div>
            <CategorySideBar
              categories={categories}
              productCount={productCount}
              show={show}
              handleClose={handleClose}
              handleSliderChange={handleSliderChange}
              value={value}
            />
          </div>
        </div>
      </div>
      {/* END SECTION SHOP */}
    </div>
  );
};

export default ShopLeft;

export async function getStaticPaths() {
  const data = await getAllProduct();
  const categories = data.categories;

  const paths = categories.map((c) => ({
    params: {
      slug: c.code,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getAllProduct();

  // here is match the code with code of the collections in the url
  const categoryId = params.slug;
  const categories = data.categories;
  const category = categories.find((c) => c.code === categoryId);
  const products = data.products;
  const collections = data.collections;

  const productCount = categories.map((category) => {
    let count = 0;

    products.forEach((product) => {
      if (product.categoryId.includes(category.id)) {
        count++;
      }
    });

    return count;
  });

  // Filter products by categoryIds  LOGIC T THEM NEW O DAY
  const filteredProducts = products.filter((product) =>
    product.categoryId.includes(category.id)
  );

  return {
    props: {
      products,
      categories,
      category,
      collections,
      filteredProducts,
      productCount,
    },
  };
}
