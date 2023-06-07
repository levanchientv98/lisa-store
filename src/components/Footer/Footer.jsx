import styled from "styled-components";
import facebook from "assets/icon-facebook.svg";
import twitter from "assets/icon-twitter.svg";
import linkin from "assets/icon-link.svg";
import instagram from "assets/icon-instag.svg";
import iconPayment from "assets/icons_payment 1.svg";
import iconTop from "assets/icon-top-arrow.svg";
import { Button, ScrollToTopButton } from "components/Button";

const TopFooterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 241px 0 90px 0;
  margin: 0 15vw;

  .top-footer {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .top-footer1 {
    width: 392px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .top-footer1 p {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    /* Black 75 */
    color: rgba(30, 40, 50, 0.75);
  }
  .top-footer a {
    text-decoration: none;
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    text-transform: capitalize;
    /* Black */
    color: #1e2832;
  }

  .top-footer a:hover {
    color: #ff6f61;
  }

  .title-menu {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-seri;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  .title-menu1 {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
  }
  .Group-icon {
    width: 208px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BottomFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e2832;
  color: #fff;
  height: auto;
  padding: 12px 300px;

  .icon-size1 {
    width: 283px;
    height: 24px;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    gap: 6px;
    align-items: center;
  }
  .flex-container span {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-seri;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #ffffff;
  }

  Button:hover {
    background-color: #ff6f61;
  }
`;

const Footer = () => {
  return (
    <>
      <TopFooterStyle>
        <div className="top-footer1">
          <div className="title-menu1">Lisa</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="Group-icon">
            <img src={facebook} alt="icon-facebook" />
            <img src={twitter} alt="icon-twitter" />
            <img src={linkin} alt="icon-linkin" />
            <img src={instagram} alt="icon-instagram" />
          </div>
        </div>
        <div className="top-footer">
          <div className="title-menu">CATALOG</div>
          <a href="/">Necklaces</a>
          <a href="/">Hoodies</a>
          <a href="/">Jewelry Box</a>
          <a href="/">T-shirt</a>
          <a href="/">Jacket</a>
        </div>
        <div className="top-footer">
          <div className="title-menu">ABOUT US</div>
          <a href="/">Our Producers</a>
          <a href="/">Sitemap</a>
          <a href="/">FAQ</a>
          <a href="/">About Us</a>
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="top-footer">
          <div className="title-menu">CUSTOMER SERVICES</div>
          <a href="/">Contact Us</a>
          <a href="/">Track Your Order</a>
          <a href="/">Product Care & Repair</a>
          <a href="/">Book an Appointment</a>
          <a href="/">Shipping & Returns</a>
        </div>
      </TopFooterStyle>

      <BottomFooterStyle>
        <div>&copy; 2023 LISA , Inc.</div>
        <img className="icon-size1" src={iconPayment} alt="icon-payment" />
        <ScrollToTopButton
          className="flex-container"
          bgColor="#1E2832"
          width={150}
        >
          <span>Scroll to top</span>
          <img src={iconTop} alt="icon-top-arrow" />
        </ScrollToTopButton>
      </BottomFooterStyle>
    </>
  );
};

export default Footer;
