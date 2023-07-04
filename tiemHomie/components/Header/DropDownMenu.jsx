import React from "react";
import { Link } from "react-router-dom";
// TEST but logic sẽ là 2 bảng COLLECTION VÀ CATEGORY
const DropDownMenu = () => {
  const collection = [
    "Quà Tặng",
    "Trang Trí Nhà Cửa",
    "Thư Giãn",
    "Tiện ích",
    "Phụ kiện",
  ];
  const categories = [
    "Thú Bông",
    "Chén Đĩa Ly Sứ",
    "Mèo Gốm",
    "Mền",
    "Túi Xách",
    "Thú Bông",
    "Gối Bông",
    "Chén Đĩa Ly Sứ",
    "Mèo Gốm",
    "Thú Bông",
    "Gối Bông",
    "Mền",
    "Quạt",
    "Chén Đĩa Ly Sứ",
    "Mền",
    "Quạt",
    "Gối Tựa Lưng",
    "Gối Cổ",
    "Ly Giữ Nhiệt",
    "Móc Khoá",
    "Túi Xách",
    "Túi Mỹ Phẩm",
  ];

  return (
    <ul>
      <li className="dropdown-header">{collection[0]}</li>
      {categories.map((category, index) => (
        <li key={index}>
          <Link className="dropdown-item nav-link nav_item" href="shop_left">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
