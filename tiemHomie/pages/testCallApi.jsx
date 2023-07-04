import { useEffect, useState } from "react";
import { getAllProduct } from "../action/menuApi";
import Image from "next/image";

const YourPageComponent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProductsCate, setFilteredProductsCate] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await getAllProduct();
        const products = fetchedData.products;
        const collections = fetchedData.collections;
        const categories = fetchedData.categories;

        // Filter products by collection
        const filterProductCollection = collections.map((collection) => {
          const filteredProducts = products.filter((product) =>
            product.collectionIds.includes(collection.id)
          );
          return {
            collection: collection,
            products: filteredProducts,
          };
        });

        // Filter products by category
        const filterProductCate = categories.map((category) => {
          const filteredProducts = products.filter((product) =>
            product.categoryId.includes(category.id)
          );
          return {
            category: category,
            products: filteredProducts,
          };
        });

        // setProducts(products);
        // setFilteredProducts(filterProductCollection);
        setFilteredProducts(filterProductCate);

        console.log(collections);
        // console.log(filterProductCollection);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Render the products or handle the loading/error state
  return (
    <div>
      {filteredProducts.length > 0 &&
        filteredProducts[14].products.map((product) => (
          <div key={product.id}>
            {product.name}
            <div className="d-flex flex-column m-3 gap-3">
              <Image src={product.picUrl} alt="img" width={200} height={200} />
              <span>{product.sellingPrice}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default YourPageComponent;
