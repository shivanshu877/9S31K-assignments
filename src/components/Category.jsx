import React from "react";
import "./Category.css";
import CategoryItem from "./CategoryItem";
const Category = () => {
  return (
    <div className="items">
      <CategoryItem
        name="Grocery"
        source="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
      />
      <CategoryItem
        name="Mobiles"
        source="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
      />
      <CategoryItem
        name="Fashion"
        source="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
      />{" "}
      <CategoryItem
        name="Electronics"
        source="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
      />{" "}
      <CategoryItem
        name="Home and furniture"
        source="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
      />
      <CategoryItem
        name="Appliances"
        source="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
      />
      <CategoryItem
        name="Travel"
        source="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
      />
    </div>
  );
};

export default Category;
