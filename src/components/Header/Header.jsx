import styled from "styled-components";
import { Button } from "components/Button";
import product from "assets/image-product.svg";
import CartIcon from "assets/v6-icon (free).svg";
import tree1 from "assets/tree1.svg";
import tree2 from "assets/tree2.svg";
import { Navigation } from "components/Navigation";

const HeaderStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
  text-align: center;
  height: auto;
  width: 100%;
  padding: 0 300px 60px 304px;
  line-height: 64px;
  background-color: #f0f0f0;

  .Layout-Content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 210px;
  }

  .title-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 686px;
    gap: 65px;
  }

  .title-header h1 {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    text-transform: capitalize;
  }

  .title-header p {
    font-family: "Roboto";
    text-align: left;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-transform: capitalize;
    margin: 0;
  }
  .img-size1 {
    width: 40%;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .flex-container p {
    margin: 0;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
  }

  .title-header Button:hover {
    background-color: #ff6f61;
    cursor: pointer;
  }

  .Group-tree img:first-child {
    position: absolute;
    width: 132.34px;
    left: 0px;
    top: 657px;
  }

  .Group-tree img:last-child {
    width: 194.75px;
    position: absolute;
    right: 0;
    top: 400px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Navigation />
      <div className="Layout-Content">
        <div className="title-header">
          <h1>Collections</h1>
          <p>
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <Button
            className="flex-container"
            width="223px"
            height="72px"
            bgColor="#1E2832"
            textColor="#fff"
          >
            <img src={CartIcon} alt="cart-icon"></img>
            <p>Shop now</p>
          </Button>
        </div>
        <img className="img-size1" src={product} alt="img-product" />
      </div>
      <div className="Group-tree">
        <img src={tree1} alt="tree1" />
        <img src={tree2} alt="tree2" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
