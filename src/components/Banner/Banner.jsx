import styled from "styled-components";
import background from "assets/background-section3.svg";
import logo1 from "assets/Zara_Logo.svg";
import logo2 from "assets/Zara_Logo2.svg";
import { Button } from "components/Button";

const BannerStyled = styled.div`
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 776px;
  margin-top: 140px;

  .logo {
    position: relative;
    background-repeat: no-repeat;
    height: 240px;
  }
  .logo-style {
    position: absolute;
    top: 60px;
    right: 0px;
  }
  .section3-title {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding-left: 1100px;
    gap: 50px;
  }
  .section3-title p {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 45px;
    /* or 154% */
    text-transform: capitalize;
    /* Primary */

    color: #ff6f61;
  }

  .section3-title span {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
    /* identical to box height */
    text-transform: capitalize;

    /* Black */
    color: #1e2832;
  }
  .section3-title img {
    width: 191px;
    height: 81px;
  }

  .section3-title Button:hover {
    background-color: #ff6f61;
  }

  //Màn hình Moblie
  @media (max-width: 768px) {
    background-size: contain;
    height: auto;
    .logo-style {
      width: 150px;
      right: 24px;
      top: 15px;
    }
    .section3-title {
      width: 58%;
      height: 100px;
      position: absolute;
      top: 7118px;
      padding-left: 178px;
      gap: 0px;
      img {
        width: 15vw;
      }
      p {
        width: 90%;
        font-size: 9px;
        line-height: 15px;
      }
      span {
        font-size: 10px;
      }
      button {
        width: 80px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

const Banner = () => {
  return (
    <BannerStyled>
      <div className="logo">
        <img className="logo-style" src={logo1} alt="logo-zara" />
      </div>
      <div className="section3-title">
        <img src={logo2} alt="logo-zara" />
        <p>
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>
        <Button width="237px" height="72px">
          <span>See Collection</span>
        </Button>
      </div>
    </BannerStyled>
  );
};
export default Banner;
