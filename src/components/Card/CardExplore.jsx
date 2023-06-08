import { styled } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .number {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 4px;
    background: #1e2832;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    color: #fff;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    text-transform: capitalize;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }
  .tag {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    .number {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const CardExplore = ({ image, name, total, bgColor, tag }) => {
  return (
    <StyledCard>
      <img className="mid-img" src={image} alt="styles" />
      <div className="tag" style={{ background: `${bgColor}` }}>
        {tag}
      </div>
      <div className="number">
        <p>{name}</p>
        <p>{total} Product</p>
      </div>
    </StyledCard>
  );
};

export default CardExplore;
