import styled from "styled-components";
import { Button } from "components/Button";
import product from "assets/image-product.svg";
import CartIcon from "assets/v6-icon (free).svg";
import tree1 from "assets/tree1.svg";
import tree2 from "assets/tree2.svg";
import { Navigation } from "components/Navigation";

const HeaderStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
  position: relative;
  height: auto;
  width: 100%;
  background-color: #f0f0f0;

  .Header-content {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 6vh;
    background-color: #f0f0f0;
  }

  .Layout-Content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    padding: 135px 0 0 0;
  }

  .title-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;
    gap: 65px;
  }

  .title-header h1 {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 74px;
    line-height: 55px;
    margin: 70px 0 0 0;
    text-transform: capitalize;
  }

  .title-header p {
    font-family: "Roboto", sans-serif;
    text-align: left;

    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-transform: capitalize;
    margin: 0;
  }
  .img-size1 {
    width: 35%;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .flex-container p {
    margin: 0;
    font-family: "Roboto", sans-serif;
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
    top: 616px;
  }

  .Group-tree img:last-child {
    width: 194.75px;
    position: absolute;
    right: 0;
    top: 368px;
  }

  //Màn hình Moblie
  @media (max-width: 768px) {
    .Layout-Content {
      padding: 0;
      width: 100%;
    }

    .title-header {
      width: 50%;
      gap: 0;
    }
    .title-header h1 {
      font-size: 34px;
      margin: 0;
      padding-top: 5vh;
    }
    .title-header p {
      font-size: 10px;
      line-height: 5vh;
    }

    Button {
      width: 30vw;
      height: 5vh;
    }
    .img-size1 {
      padding-top: 10vh;
      width: 45%;
    }
    .Header-content {
      height: auto;
      width: 80%;
      padding: 0 10vw 5vh 10vw;
      margin: 0;
    }
  }

  //Màn hình laptop
  @media (max-width: 1399.98px) {
    .Group-tree {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="Header-content">
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
      </div>
    </HeaderStyled>
  );
};

export default Header;
