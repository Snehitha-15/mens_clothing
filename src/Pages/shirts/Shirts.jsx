// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, CardBody, CardImg, CardTitle, CardText, Button, Row, Col } from "reactstrap";
// import { addToCart } from "../../Redux/cartSlice";
// import Categories from "../../components/Categories";

// // Define categories
// const categoryList = ["Shirts", "Pants", "T-Shirts", "Sweaters", "Shorts", "Jackets", "Jeans", "Sweatshirts"];

// const Shirts = () => {
//   const shirts = useSelector((state) => state.shirts.shirts);
//   const dispatch = useDispatch();
//   const [selectedCategory, setSelectedCategory] = useState("Shirts");

//   // For now we only have shirts. Later, you can expand to other categories.
//   console.log("catego",selectedCategory)
//   const filteredProducts = selectedCategory === "Shirts" ? shirts : [];
//   console.log("filteredProducts",filteredProducts)

//   return (
//     <div className="shirts-container">
//       <Categories categories={categoryList} selected={selectedCategory} onSelect={setSelectedCategory} />
//       <h2 className="section-title">Men’s {selectedCategory} Collection</h2>
//       <Row>
//         {filteredProducts.map((shirt) => (
//           <Col  md="4" lg="2" key={shirt.id} className="mb-3">
//             <Card className="product-card shadow-sm" style={{ fontSize: "14px" }}>
//             <CardImg top width="100%" src={shirt.image} alt={shirt.name} style={{ height: "220px", maxWidth:"auto" }} />
//             <CardBody style={{ padding: "10px" }}>
//           <CardTitle tag="h6">{shirt.name}</CardTitle>
//           <CardText style={{ fontSize: "12px", minHeight: "40px" }}>{shirt.description}</CardText>

//   {/* Correct flex container for price and button */}
//   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
//     <span className="price">₹{shirt.price}</span>
//     <Button color="dark" size="sm" onClick={() => dispatch(addToCart(shirt))}>
//       Add to Cart
//     </Button>
//   </div>
// </CardBody>

//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Shirts;
