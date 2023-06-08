import styled from "styled-components";
import iconSearch from "assets/icon-search.svg";
import { ReactComponent as User } from "assets/user-icon.svg";
import { ReactComponent as Cart } from "assets/icon-cart2.svg";

const StyledNavigation = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid #e3e3e3;

  h1 {
    font-family: "AmstelvarAlpha";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 50px;
  }

  .search-bar {
    padding: 0px;
    width: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 0;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    background-color: #f0f0f0;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    padding-right: 40px;
    color: #0f0f0f;
  }
  .input-search::placeholder {
    color: rgba(7, 7, 7, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    color: #141414;
    background-color: transparent;
    pointer-events: painted;
  }
  .icon-size {
    padding-top: 18px;
    width: 40px;
    height: 40px;
  }
  .btn-search:focus ~ .input-search {
    width: 10vw;
    border-radius: 0px;
    background-color: transparent;
    padding-left: 50px;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 10vw;
    padding-left: 50px;
    border-radius: 0px;
    background-color: transparent;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }

  .Group-title-nav {
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .Group-title-nav a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */
    text-transform: capitalize;
    color: #1e2832;
    text-decoration: none;
  }

  .flex-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .flex-item:hover {
    a {
      color: #ff6f61;
    }
    svg {
      filter: invert(47%) sepia(71%) saturate(632%) hue-rotate(317deg)
        brightness(111%) contrast(101%);
    }
  }

  //Màn hình Moblie
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    height: 20vh;

    h1 {
      font-size: 40px;
      margin: 2vw 15vw 0 15vw;
    }
    .search-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 6vh;
    }
    .search-box button {
      width: 10vw;
    }
    .search-bar {
      order: 1;
    }

    .Group-title-nav {
      padding: 10px;
      width: 100%;
      order: 1;
    }

    .input-search:focus {
      width: 50vw;
      padding-left: 0;
    }

    .btn-search {
      position: static;
    }
    .icon-size {
      padding: 0;
      width: 8vw;
    }

    .btn-search:focus ~ .input-search {
      width: 50vw;
      padding-left: 0;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="search-bar">
        <div className="search-box">
          <button className="btn-search">
            <img className="icon-size" src={iconSearch} alt="icon-search" />
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
      <h1>Lisa Store</h1>
      <div className="Group-title-nav">
        <div className="flex-item">
          <User />
          <a href="/">
            <span> Account </span>
          </a>
        </div>
        <div className="flex-item">
          <Cart />
          <a href="/">
            <span> Shoping</span>
          </a>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
