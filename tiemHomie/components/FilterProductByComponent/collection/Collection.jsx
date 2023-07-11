// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { FaGift, FaHeadphones, FaHome, FaCoffee, FaPuzzlePiece } from "react-icons/fa";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 6
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 5
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// const Collection = ({ collections }) => {
//   const icons = [<FaGift />, <FaHome />, <FaCoffee />, <FaPuzzlePiece />, <FaHeadphones />];
// let i = 0;
//   return (
//     <div className={`${classes.category}`}>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <Carousel
//               autoPlaySpeed={3000}
//               autoPlay
//               minimumTouchDrag={6}
//               swipeable
//               arrows={false}
//               responsive={responsive}
//             >
//               {collections.slice(0, 5).map((collection, index) => (
//                 <div className={`${classes.card}`} key={index}>
//                   <Link href={`/collection/${collection.code}`}>
//                     <div className={`${classes.icon}`}>{icons[index % icons.length]}</div>
//                     <h6 className={`${classes.label}`}>{collection.name}</h6>
//                   </Link>
//                 </div>
//               ))}

//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Collection

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Collection.module.css";
import Link from "next/link";

const CollBar = ({ collections }) => {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <div className={`${classes.category}`}>
      <div className="container">
        <div className="row">
          <div className="col-24">
            <Slider {...settings}>
              {collections.map((category, index) => (
                <div className={`${classes.card}`} key={index}>
                  <Link href={`/category/${category.code}`}>
                    <div>
                      <img
                        className={`${classes.icon}`}
                        src={category.picUrl}
                        alt={category.name}
                      />
                    </div>
                    <h4 className={`${classes.label}`}>{category.name}</h4>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* <Arrows sliderRef={sliderRef} /> */}
    </div>
  );
};

export default CollBar;
