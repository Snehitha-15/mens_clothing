// src/components/Products/Products.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import { addToCart } from "../../Redux/cartSlice";
import Categories from "../../components/Categories";

// List of categories
const categoryList = ["Shirts", "Pants", "T-Shirts", "Sweaters", "Shorts", "Jackets", "Jeans", "Sweatshirts", "Blazers", "Suits"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state) => {
  if (!selectedCategory) return []; // nothing selected

  let key = selectedCategory.toLowerCase();

  // Map category names to slice keys
  const map = {
    "t-shirts": "tshirts",
    "sweatshirts": "sweatshirts",
    "blazers": "blazers",
    "jackets": "jackets",
    "shirts": "shirts",
    "pants": "pants",
    "shorts": "shorts",
    "sweaters": "sweaters",
    "jeans": "jeans",
    "suits": "suits",
  };

  key = map[key] || key;

  return state[key]?.[key] || [];
});

  return (
    <div className="products-container p-4">
      <Categories categories={categoryList} selected={selectedCategory} onSelect={setSelectedCategory} />

      <h2 className="section-title text-center mb-4">
        Men’s {selectedCategory} Collection
      </h2>

      <Row>
        {products && products.length > 0 ? (
          products.map((item) => (
            <Col md="4" lg="2" key={item.id} className="mb-3">
              <Card className="product-card shadow-sm" style={{ fontSize: "14px" }}>
                <CardImg
                  top
                  width="100%"
                  src={item.image}
                  alt={item.name}
                  style={{ height: "220px" }}
                />
                <CardBody style={{ padding: "10px" }}>
                  <CardTitle tag="h6">{item.name}</CardTitle>
                  <CardText style={{ fontSize: "12px", minHeight: "40px" }}>{item.description}</CardText>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <span className="price">₹{item.price}</span>
                    <Button color="dark" size="sm" onClick={() => dispatch(addToCart(item))}>
                      Add to Cart
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center w-100 mt-4">No products available in this category.</p>
        )}
      </Row>
    </div>
  );
};

export default Products;
