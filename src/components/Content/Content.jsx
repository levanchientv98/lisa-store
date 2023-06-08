import styled from "styled-components";
import brand1 from "assets/brand-1.png";
import brand2 from "assets/brand-2.png";
import brand3 from "assets/brand-3.png";
import brand4 from "assets/brand-4.png";
import brand5 from "assets/brand-5.png";
import item1 from "assets/image-category-1.svg";
import item2 from "assets/item-category.svg";
import item3 from "assets/item-category-2.svg";
import item4 from "assets/item-category-hover 1.svg";
import item5 from "assets/item-category5.svg";
import iconFilter from "assets/v6-iconfilter.svg";
import { Button } from "components/Button";
import { Card, CardExplore } from "components/Card";
import product1 from "assets/image-product-3.svg";
import product2 from "assets/image-product-4.svg";
import product3 from "assets/image-product-5.svg";
import product4 from "assets/image-product-2.svg";
import product5 from "assets/image-product-7.svg";
import product6 from "assets/image-product-6.svg";
import product7 from "assets/image-product-1.svg";
import product8 from "assets/image-product-8.svg";
import { Banner } from "components/Banner";
import { SliderProduct } from "components/SliderProduct";
import { Newletter } from "components/Newletter";

const ContentStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
  height: auto;
  background-color: #ffffff;

  .Group-brand {
    width: 70%;
    height: auto;
    margin: 81px 300px 90px 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .hot-catagory {
    display: flex;
    width: 70%;
    margin: 0 300px 140px 300px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    position: relative;
  }

  .title-section1 {
    position: absolute;
    top: 310px;
    left: -315px;
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(-90deg);
  }

  .gird-container1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .section-title {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    margin-top: 0;
    text-align: center;
    text-transform: capitalize;
  }
  .grid-product {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 300px;
  }
  .product-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .Filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Filter-container p {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    text-transform: capitalize;
  }

  .list-title {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list-title span {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
  }

  .list-title span:hover {
    color: #ff6f61;
  }

  .list-title p {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    text-transform: capitalize;
    color: #000;
  }
  .Filter Button:hover {
    background-color: #ff6f61;
    cursor: pointer;
  }

  .list-products {
    display: grid;
    gap: 18px;
    grid-template-columns: auto auto auto auto;
  }
  .factory:hover {
    color: #ff6f61;
  }

  //Màn hình Moblie
  @media (max-width: 768px) {
    .list-products {
      display: grid;
      gap: 10px;
      grid-template-columns: auto;
    }
    .Group-brand {
      width: 100%;
      gap: 10px;
      justify-content: center;
      margin: 35px 0;
    }

    .title-section1 {
      width: 80%;
      position: static;
      transform: none;
      font-size: 24px;
    }
    .gird-container1 {
      grid-template-columns: 1fr;
    }

    .hot-catagory {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 45px 0;
      img:first-child {
        width: 300px;
      }
    }
    .grid-product {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0%;
    }

    .section-title {
      font-size: 32px;
      line-height: 40px;
    }
    .list-title {
      width: 70%;
      p {
        font-size: 14px;
      }
      span {
        font-size: 11px;
      }
    }

    .product-title {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .Filter button {
      width: 18vw;
    }

    .Filter-container p {
      font-size: 12px;
    }
  }
`;

// data product
const DataCategory = [
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

const dataItem = [
  {
    image: item2,
    name: "pants",
    total: 200,
  },
  {
    image: item5,
    name: "coat",
    total: 520,
    tag: "Sale",
    bgColor: "#1E2832",
  },
  {
    image: item3,
    name: "shirt",
    total: 320,
  },
  {
    image: item4,
    name: "jacket",
    total: 103,
  },
];

const Content = () => {
  return (
    <ContentStyled>
      <div className="Group-brand">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand2" />
        <img src={brand3} alt="brand3" />
        <img src={brand4} alt="brand4" />
        <img src={brand5} alt="brand5" />
      </div>
      <div className="hot-catagory">
        <div className="title-section1">Explore new and popular styles</div>
        <CardExplore
          className="topmodel"
          image={item1}
          name={"manto"}
          total={86}
        />{" "}
        <div className="gird-container1">
          {dataItem.map((item) => (
            <CardExplore
              image={item.image}
              name={item.name}
              total={item.total}
              tag={item.tag}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
      <div className="grid-product">
        <h1 className="section-title">Or subscribe to the newsletter</h1>
        <div className="product-title">
          <div className="list-title">
            <p>All Products</p>
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
              <img src={iconFilter} alt="icon-filter" />
              <p>Filter</p>
            </Button>
          </div>
        </div>
        <div className="list-products">
          {DataCategory.map((item) => (
            <Card
              title={item.title}
              img={item.img}
              tag={item.tag}
              category={item.category}
              oldprice={item.oldprice}
              newprice={item.newprice}
            ></Card>
          ))}
        </div>
      </div>
      <Banner />
      <SliderProduct></SliderProduct>
      <Newletter />
    </ContentStyled>
  );
};

export default Content;
