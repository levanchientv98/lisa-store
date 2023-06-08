import styled from "styled-components";

import { Button } from "components/Button";
import { SliderShow } from "components/SliderShow";

const SilderProductStyle = styled.div`
  width: 70%;
  margin: 140px 300px;

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

  //Màn hình Moblie
  @media (max-width: 768px) {
    margin: 0 40px;
    width: 100%;
    .section4-title {
      width: 310px;
    }
    .react-multiple-carousel__arrow--right {
      top: calc(4% + 150px);
      right: calc(4% + 44px);
    }
    .react-multiple-carousel__arrow--left {
      top: calc(4% + 150px);
      left: calc(4% + -16px);
    }
  }
`;

const SlideProduct = () => {
  return (
    <SilderProductStyle>
      <div className="section4-title">Best sellers</div>
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
            <p>Show All</p>
          </Button>
        </div>
      </div>
      <SliderShow></SliderShow>
    </SilderProductStyle>
  );
};
export default SlideProduct;
