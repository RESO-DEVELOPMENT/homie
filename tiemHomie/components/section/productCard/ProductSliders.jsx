import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import productData from "../../data/product.json"
import Link from "next/link";
import classes from "./ProductSliders.module.css"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const productsDetail = () => {
    const [showProductActionBox, setShowProductActionBox] = useState(true);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Carousel 
                    autoPlaySpeed={3000}
                    autoPlay
                    infinite
                    sliderClass
                    itemClass="carousel-item-padding-left-40-px"
                    containerClass="carousel-container"
                    responsive={responsive}>
                        {productData.map((product, index) => (
                            <div key={index}>
                                <Link href="/">
                                    <ProductCard
                                        productData={product}
                                        showProductActionBox={showProductActionBox}
                                        // showSaleOfprice={showSaleOfprice}
                                    />
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default productsDetail