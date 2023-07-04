import React from "react";
import Link from "next/link";
const ProductGallery = () => {
  return (
      <div
        id="pr_item_gallery"
        className="product_gallery_item slick_slider"
        data-slides-to-show={4}
        data-slides-to-scroll={1}
        data-infinite="false"
      >
        <div className="item">
          <Link
            href="#"
            className="product_gallery_item active"
            data-image="/assets/images/product_img1.jpg"
            data-zoom-image="assets/images/product_zoom_img1.jpg"
          >
            <img
              src="/assets/images/product_small_img1.jpg"
              alt="product_small_img1"
            />
          </Link>
        </div>
        <div className="item">
          <Link
            href="#"
            className="/product_gallery_item"
            data-image="assets/images2/image-15@2x.png"
            data-zoom-image="assets/images/product_zoom_img2.jpg"
          >
            <img
              src="/assets/images/product_small_img2.jpg"
              alt="product_small_img2"
            />
          </Link>
        </div>
        <div className="item">
          <Link
            href="#"
            className="product_gallery_item"
            data-image="/assets/images/product_img1-3.jpg"
            data-zoom-image="assets/images/product_zoom_img3.jpg"
          >
            <img
              src="/assets/images/product_small_img3.jpg"
              alt="product_small_img3"
            />
          </Link>
        </div>
        <div className="item">
          <Link
            href="#"
            className="product_gallery_item"
            data-image="/assets/images/product_img1-4.jpg"
            data-zoom-image="assets/images/product_zoom_img4.jpg"
          >
            <img
              src="/assets/images/product_small_img4.jpg"
              alt="product_small_img4"
            />
          </Link>
        </div>
      </div>
  );
};

export default ProductGallery;
