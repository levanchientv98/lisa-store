import styled from "styled-components";
import card1 from "assets/image-product-9.svg";
import card2 from "assets/image-product-10.svg";
import card3 from "assets/image-product-11.svg";
import card4 from "assets/image-product-12.svg";
import card5 from "assets/image-product-13.svg";
import card6 from "assets/image-product-14.svg";
import iconInstagram from "assets/instagramWhite.png";
const NewletterStyle = styled.div`
  background-color: #f0f0f0;

  .section5-layout {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin: 0 300px;
    padding: 100px 0;
  }

  .section5-tilte {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */
    text-align: center;
    text-transform: capitalize;
  }

  .Group-instagram {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
  }

  .sign {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    text-transform: capitalize;
    /* Primary */
    color: #ff6f61;
    padding-bottom: 30px;
  }
  .action1:hover {
    img:first-child {
      filter: brightness(50%);
    }
    background-image: url(${iconInstagram});
    background-repeat: no-repeat;
    .icon-size {
      display: block;
    }
  }

  .icon-size {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 100px;
    height: 100px;
    display: none;
  }
  .action1 {
    position: relative;
  }

  //Màn hình Moblie
  @media (max-width: 768px) {
    .section5-layout {
      margin: 0 40px;
      width: 80%;
      justify-content: center;
      align-items: center;
    }
    .section5-tilte {
      font-size: 32px;
      line-height: 40px;
    }
    .Group-instagram {
      justify-content: center;
    }
    .sign {
      padding-bottom: 0;
    }
  }
`;

const Newletter = () => {
  return (
    <NewletterStyle>
      <div className="section5-layout">
        <div className="section5-tilte">
          Follow products and discounts on Instagram
        </div>
        <div className="Group-instagram">
          <div className="action1">
            <img src={card1} alt="Instagram-img1" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
          <div className="action1">
            <img src={card2} alt="Instagram-img2" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
          <div className="action1">
            <img src={card3} alt="Instagram-img3" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
          <div className="action1">
            <img src={card4} alt="Instagram-img4" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
          <div className="action1">
            <img src={card5} alt="Instagram-img5" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
          <div className="action1">
            <img src={card6} alt="Instagram-img6" />
            <img className="icon-size" src={iconInstagram} alt="iconInstagra" />
          </div>
        </div>
        <div className="sign">@lisa.official</div>
      </div>
    </NewletterStyle>
  );
};

export default Newletter;
