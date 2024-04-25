import React from "react";
import { CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <CardImg src={product.image}></CardImg>
      </Link>
      <CardBody>
        <Link to={`/product/${product.id}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardText>
          <div>
            {product.rating} from {product.numReviews} reviews
          </div>
        </CardText>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
      </CardBody>
    </Card>
  );
}

export default Product;
