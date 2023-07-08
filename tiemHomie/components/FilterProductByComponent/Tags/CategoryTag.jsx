import React from "react";
import Link from "next/link";
const CategoryTags = ({ categories, productCount }) => {
  let i = 0;
  return (
    <>
      <Link href={`/category`}>
        <h5 className="widget_title">Danh mục</h5>
      </Link>
      <ul className="widget_categories">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${[category.code]}`}>
              <span className="categories_name">{category.name}</span>
              <span className="categories_num">({productCount[i]})</span>
              <span style={{ display: "none" }}>{i++}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryTags;
