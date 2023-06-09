import Carousel from "react-multi-carousel";

import product1 from "assets/image-product-3.svg";
import product2 from "assets/image-product-4.svg";
import product3 from "assets/image-product-5.svg";
import product4 from "assets/image-product-2.svg";
import product5 from "assets/image-product-7.svg";
import product6 from "assets/image-product-6.svg";
import product7 from "assets/image-product-1.svg";
import product8 from "assets/image-product-8.svg";
import { Card } from "components/Card";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DataProducts = [
  {
    img: product2,
    title: "Nike Sportswear Futura Luxe",
    category: "Bag",
    oldprice: "130.00",
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
    img: product8,
    title: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    oldprice: "160.00",
  },
  {
    img: product7,
    title: "Nike Repel Miler",
    category: "Dress",
    oldprice: "120.50",
  },
  {
    img: product1,
    title: "Adicolor Classics Joggers",
    category: "Dress",
    oldprice: "63.85",
  },
  {
    img: product3,
    title: "Geometric print Scarf",
    category: "Scarf",
    oldprice: "53.00",
  },
];

const SliderShow = () => {
  return (
    <Carousel responsive={responsive}>
      {DataProducts.map((item) => (
        <Card
          title={item.title}
          img={item.img}
          tag={item.tag}
          category={item.category}
          oldprice={item.oldprice}
          newprice={item.newprice}
        ></Card>
      ))}
    </Carousel>
  );
};
export default SliderShow;
