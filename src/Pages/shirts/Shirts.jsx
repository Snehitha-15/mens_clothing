import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import { addToCart } from "../../Redux/cartSlice";

const Shirts = () => {
  const shirts = useSelector((state) => state.shirts.shirts);
  const dispatch = useDispatch();

  return (
    <div className="shirts-container">
      <h2 className="section-title">Men’s Shirts Collection</h2>
      <Row>
        {shirts.map((shirt) => (
          <Col sm="6" md="3" key={shirt.id} className="mb-4">
            <Card className="product-card shadow-sm">
              <CardImg top width="100%" src={shirt.image} alt={shirt.name} />
              <CardBody>
                <CardTitle tag="h5">{shirt.name}</CardTitle>
                <CardText>{shirt.description}</CardText>
                <CardText className="price">₹{shirt.price}</CardText>
                <Button color="dark" onClick={() => dispatch(addToCart(shirt))}>
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Shirts;
