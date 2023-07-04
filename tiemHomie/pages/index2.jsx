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

          //  START FILTER WITH COLLECTION

          // V1 
        // Filter products by collection and type
        // const filterProductCollection = collections.map((collection) => {
        //   const filteredProducts = products
        //   .filter((product) => product.collectionIds.includes(collection.id))
        //   .filter((product) => product.type !== 'CHILD');

        //   return {
        //     collection: collection,
        //     products: filteredProducts,
        //   };
        // });

        //V2
        // const filterProductCollection = collections.map((collection) => {
        //   const filteredProducts = products
        //     .filter((product) => product.collectionIds.includes(collection.id))
        //     .map((product) => {
        //       if (product.type === 'PARENT' || product.type === 'SINGLE') {
        //         const childProducts = products.filter(
        //           (childProduct) => childProduct.type === 'CHILD' && childProduct.parentProductId === product.id
        //         );

        //         const minPrice = Math.min(...childProducts.map((childProduct) => childProduct.sellingPrice));

        //         return {
        //           ...product,
        //           sellingPrice: minPrice,
        //         };
        //       } else {
        //         return product;
        //       }
        //     })
        //     .filter((product) => product && product.type !== 'CHILD');

        //   return {
        //     collection: collection,
        //     products: filteredProducts,
        //   };
        // });

        //V3
        const collectionIds = new Set(
          collections.map((collection) => collection.id)
        );

        const filterProductCollection = collections.map((collection) => {
            const filteredProducts = products.reduce((result, product) => {
              if ( product.collectionIds.includes(collection.id) && product.type !== "CHILD"){
                if (product.type === "PARENT" || product.type === "SINGLE") {
                
                  const childProducts = products.filter(
                    (childProduct) =>
                      childProduct.type === "CHILD" &&
                      childProduct.parentProductId === product.id
                  );

                  const minPrice = Math.min(
                    ...childProducts.map(
                      (childProduct) => childProduct.sellingPrice
                    )
                  );

                  result.push({
                    ...product,
                    minPrice: minPrice,
                  });
                } else {
                  result.push(product);
                }
              }
              return result;
            }, []);

            return {
              collection: collection,
              products: filteredProducts,
            };
          }).filter((collection) => collectionIds.has(collection.collection.id));

          // THE END FILTER WITH COLLECTION

        // Filter products by category
        // const filterProductCate = categories.map((category) => {
        //   const filteredProducts = products.filter((product) =>
        //     product.categoryId.includes(category.id)
        //   );
        //   return {
        //     category: category,
        //     products: filteredProducts,
        //   };
        // });

        // setProducts(products);
        // setFilteredProducts(filterProductCollection);
        setFilteredProducts(filterProductCollection);

        console.log(filterProductCollection);
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
        filteredProducts[1].products.map((product) => (
          <div key={product.id}>
            {product.name}
            <div className="d-flex flex-column m-3 gap-3">
              <img src={product.picUrl} alt="img"  />
              <span>{product.minPrice !== Infinity ? product.minPrice : product.sellingPrice}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default YourPageComponent;
