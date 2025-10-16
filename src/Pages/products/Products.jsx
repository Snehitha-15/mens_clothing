import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, CardImg, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import { addToCart } from "../../Redux/cartSlice";
import Categories from "../../components/Categories";

// All your categories
const categoryList = ["Shirts", "Pants", "T-Shirts", "Sweaters", "Shorts", "Jackets", "Jeans", "Sweatshirts"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  // Dynamically get products based on selected category
  const products = useSelector((state) => {
    const key = selectedCategory.toLowerCase(); 
    return state[key] ? state[key][key] : [];
  });

  return (
    <div className="products-container p-4">
      {/* Category Buttons */}
      <Categories categories={categoryList} selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Section Title */}
      <h2 className="section-title text-center mb-4">Men’s {selectedCategory} Collection</h2>

      {/* Products Grid */}
      <Row>
        {products.map((item) => (
          <Col md="4" lg="2" key={item.id} className="mb-3">
            <Card className="product-card shadow-sm" style={{ fontSize: "14px" }}>
              <CardImg
                top
                width="100%"
                src={item.image}
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <CardBody style={{ padding: "10px" }}>
                <CardTitle tag="h6">{item.name}</CardTitle>
                <CardText style={{ fontSize: "12px", minHeight: "40px" }}>{item.description}</CardText>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
                  <span className="price">₹{item.price}</span>
                  <Button color="dark" size="sm" onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
