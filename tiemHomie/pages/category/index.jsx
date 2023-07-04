// import React, { useState, useEffect } from "react";
// import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import ProductCard from "../../components/section/productCard/ProductCard";
// import { getAllProduct } from "../../action/menuApi";
// import PriceFilter from "../../components/price/priceFilter";
// import Pagination from "../../components/paging/PhanTrang";
// import SapXep from "../../components/sortBySelected/SortBySelected";
// import DanhMuc from "../../components/DanhMuc/DanhMuc";
// const shopleft = ({ products, collections, productCount }) => {
//   console.log(products);
//   console.log(collections);
//   const [showProductActionBox, setShowProductActionBox] = useState(true);
//   const [data, setData] = useState(products);
//   const [selectedSortOption, setSelectedSortOption] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);

//   const itemsPerPage = 9;
//   const pageCount = Math.ceil(data.length / itemsPerPage);

//   // Apply pagination to the data
//   const startIndex = currentPage * itemsPerPage;
//   const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
//   let i = 0;
//   const sortData = (sortOption) => {
//     let sortedData = [...data];

//     switch (sortOption) {
//       //   case 'popularity':
//       //     sortedData = sortedData.sort((a, b) => a.popularity - b.popularity);
//       //     break;
//       //   case 'date':
//       //     sortedData = sortedData.sort((a, b) => a.date - b.date);
//       //     break;
//       case "price":
//         sortedData = sortedData.sort((a, b) => a.sellingPrice - b.sellingPrice);
//         break;
//       case "price-desc":
//         sortedData = sortedData.sort((a, b) => b.sellingPrice - a.sellingPrice);
//         break;
//       default:
//         sortedData = products;
//         break;
//     }

//     setData(sortedData);
//   };
//   const handleSortOptionChange = (event) => {
//     const selectedOption = event.target.value;
//     setSelectedSortOption(selectedOption);
//     sortData(selectedOption); // Pass selectedOption as an argument to sortData
//   };

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   useEffect(() => {
//     setData(products);
//   }, [products]);

//   return (
//     <div className="main_content">
//       <BreadCrumb
//         descriptionTitle="Tất Cả Sản Phẩm"
//         title="Tất cả sản phẩm"
//         middlePath="Bộ sưu tập"
//       ></BreadCrumb>
//       {/* START SECTION SHOP */}
//       <div className="section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-9">
//               <div className="row align-items-center mb-4 pb-1">
//                 <div className="col-12">
//                   <SapXep handleSortOptionChange={handleSortOptionChange} selectedSortOption={selectedSortOption}></SapXep>
//                 </div>
//               </div>
//               <div className="row shop_container">
//                 {paginatedData.map((product, index) => (
//                   <div key={index} className="col-md-4">
//                     <ProductCard
//                       productData={product}
//                       showProductActionBox={showProductActionBox}
//                     />
//                   </div>
//                 ))}
//                 <Pagination
//                   pageCount={pageCount}
//                   onPageChange={handlePageChange}
//                 />              
//                 </div>
//             </div>
//             <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
//               <div className="sidebar">
//                 <div className="widget">
//                   <DanhMuc collections={collections} productCount={productCount}></DanhMuc>
//                 </div>
//                 <div className="widget">
//                   <PriceFilter products={products} setData={setData} setSelectedSortOption={setSelectedSortOption} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* END SECTION SHOP */}
//     </div>
//   );
// };

// export default shopleft;

// export async function getStaticProps() {
//   const data = await getAllProduct();
//   const products = data.products;
//   const collections = data.collections;
//   const productCount = collections.map((collection) => {
//     let count = 0;

//     products.forEach((product) => {
//       if (product.collectionIds.includes(collection.id)) {
//         count++;
//       }
//     });

//     return count;
//   });

//   //   const filteredCollections = collections.filter((_, index) => productCount[index] > 0);

//   return {
//     props: { products, collections, productCount },
//   };
// }

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
