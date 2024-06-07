import React from "react";
import "./CategoryItem.css";
const CategoryItem = ({ name, source }) => {
  return (
    <div>
      <div>
        <div class="category-item">
          <div class="_3ETuFY">
            <div class="">
              <img class="_2puWtW _3a3qyb" alt={name} src={source} />
            </div>
          </div>
          <span class="_1XjE3T">
            <span>{name}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
