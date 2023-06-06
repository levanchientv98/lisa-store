import { styled } from "styled-components";
import { ReactComponent as Heart } from "assets/heart-icon1.svg";
import { ReactComponent as Search } from "assets/icon-search.svg";
import { ReactComponent as Shop } from "assets/icon-cart2.svg";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    height: 22px;
    margin: 0;
    /* H6 */
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    text-transform: capitalize;
    /* Dark */
    color: #000000;
  }
  img {
    width: 312px;
    height: 400px;
  }
  .category {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    color: rgba(0, 0, 0, 0.5);
  }
  .discount-price {
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    color: #ff6f61;
  }
  .cateory-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    display: flex;
    align-items: center;

    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-align: right;
    text-transform: capitalize;
  }

  .product-content {
    margin: 18px 0 6px 0;
    padding-left: 10px;
  }

  .discount {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 64px;
  }

  .discount p {
    margin: 0;
  }

  .oldprice {
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration-line: line-through;
  }
  .newprice {
    font-weight: 600;
    font-size: 16px;
    color: #ff6f61;
  }

  .sale {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  .hot {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    background-color: #ff6f61;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  .pic {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
    position: relative;
  }
  .pic:hover {
    .shopnow {
      visibility: visible;
      opacity: 1;
    }
  }

  .shopnow {
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1e2832;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  .action-img {
    width: 30px;
    height: 30px;
    padding-right: 10px;
    filter: invert(100%) sepia(0%) saturate(22%) hue-rotate(343deg)
      brightness(106%) contrast(106%);
  }
  .shop-action2 {
    display: flex;
    align-items: center;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
  .shop-action2:hover {
    cursor: pointer;
    span {
      color: #ff6f61;
    }
    svg {
      filter: invert(52%) sepia(29%) saturate(1083%) hue-rotate(316deg)
        brightness(101%) contrast(101%);
    }
  }

  .shop-action1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Card = ({ img, title, category, tag, oldprice, newprice, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <div className="pic">
        <img src={img} alt="img" />
        {tag === "sale" ? <div className="sale">sale</div> : null}
        {tag === "hot" ? <div className="hot">Hot</div> : null}
        <div className="shopnow">
          <div className="shop-action1">
            <Heart className="action-img" />
            <Search className="action-img" />
          </div>
          <div className="shop-action2">
            <Shop className="action-img" />
            <span>Shop Now</span>
          </div>
        </div>
      </div>
      {/* <div className="tag">{tag}</div> */}
      <div className="product-content">
        <div className="title">{title}</div>
        <div className="cateory-price">
          <div className="category">{category}</div>
          {newprice ? (
            <div className="discount">
              <p className="oldprice">${oldprice}</p>
              <p className="newprice">${newprice}</p>
            </div>
          ) : (
            <p className="price">${oldprice}</p>
          )}
        </div>
      </div>
    </StyledCard>
  );
};
export default Card;
