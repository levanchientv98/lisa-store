import styled from "styled-components";
import iconSearch from "assets/icon-search.svg";

const StyledNavigation = styled.div`
  display: flex;

  .search-bar {
    margin-top: 40px;
    padding: 0px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 50px;
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
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #141414;
    background-color: transparent;
    pointer-events: painted;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="search-bar">
        <div className="search-box">
          <button className="btn-search">
            <img src={iconSearch} alt="" />
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
          />
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
