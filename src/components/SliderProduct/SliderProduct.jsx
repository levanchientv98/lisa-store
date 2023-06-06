import styled from "styled-components";
import { Button } from "components/Button";
import product1 from "assets/image-product-3.svg";
import product2 from "assets/image-product-4.svg";
import product3 from "assets/image-product-5.svg";
import product4 from "assets/image-product-2.svg";
import product5 from "assets/image-product-7.svg";
import product6 from "assets/image-product-6.svg";
import product7 from "assets/image-product-1.svg";
import product8 from "assets/image-product-8.svg";
import { Card } from "components/Card";
import { Carousel } from "react-responsive-carousel";

const SilderProductStyle = styled.div`
  width: 1320px;
  margin: 0 300px;
  margin-top: 140px;

  .section4-title {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;
  }

  .list-products2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DataProducts = [
  {
    img: product1,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    oldprice: "63.85",
  },
  {
    img: product2,
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    oldprice: "130.00",
  },
  {
    img: product3,
    title: "Geometric print Scarf",
    category: "Scarf",
    oldprice: "53.00",
  },
  {
    img: product4,
    title: "Yellow Reserved Hoodie",
    category: "Dress",
    tag: "sale",
    bgColor: "#000",
    oldprice: "364.00",
    newprice: "155.00",
  },
  {
    img: product5,
    title: "Basic Dress Greens",
    tag: "hot",

    category: "Dress",
    oldprice: "236.00",
  },
  {
    img: product6,
    title: "Nike Air Zoom Pegasus",
    category: "Shoe",
    tag: "sale",
    newprice: "198.00",
    oldprice: "220.00",
  },
  {
    img: product7,
    title: "Nike Repel Miler",
    category: "Dress",
    oldprice: "120.50",
  },
  {
    img: product8,
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    oldprice: "160.00",
  },
];

const SlideProduct = () => {
  return (
    <SilderProductStyle>
      <div className="section4-title">Best sellers</div>
      <div className="product-title">
        <div className="list-title">
          <span>All Products</span>
          <span>T-Shirt</span>
          <span>Hoodies</span>
          <span>Jacket</span>
        </div>
        <div className="Filter">
          <Button
            className="Filter-container"
            bgColor="#000"
            textColor="#fff"
            height="32px"
            width="92px"
          >
            <p>Show All</p>
          </Button>
        </div>
      </div>
      <div className="list-products2">
        <Carousel>
          <Card
            title={"Nike Sportswear Futura Luxe"}
            img={product8}
            tag={null}
            category={"Glasses"}
            oldprice={"160.00"}
            newprice={null}
          ></Card>
          <Card
            title={"Nike Sportswear Futura Luxe"}
            img={product8}
            tag={null}
            category={"Glasses"}
            oldprice={"160.00"}
            newprice={null}
          ></Card>
        </Carousel>
      </div>
    </SilderProductStyle>
  );
};
export default SlideProduct;
