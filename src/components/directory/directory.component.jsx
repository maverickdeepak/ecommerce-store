import React from "react";
import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, imageUrl }) => (
        <CategoryItem title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
