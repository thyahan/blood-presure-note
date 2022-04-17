import React from "react";

interface Props {
  children: any;
}

const ProductCard = (props: Props) => {
  return <div className="product-card">{props.children}</div>;
};

export default ProductCard;
