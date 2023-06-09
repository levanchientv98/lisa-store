import styled from "styled-components";
import SearchIcon from "assets/SearchAdmin-icon.svg";
import BellIcon from "assets/bell-icon.svg";
import MenuIcon from "assets/menu-icon.svg";
import Avatar from "assets/Avata.svg";

const HeaderAdminStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .title-header {
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    /* identical to box height */
    color: #535353;
  }
  .search-input {
    width: 562px;
    height: 56px;
    border-radius: 10px;
    border: none;
    text-indent: 56px;
    font-size: 16px;
    line-height: 21px;
    outline: none;
  }
  .search-wrapper {
    width: 40%;
    position: relative;
    display: flex;
    align-items: center;
    img {
      position: absolute;
      margin-left: 24px;
    }
  }
  .flex-container1 {
    width: 15%;
    display: flex;
  }
  .Group-icon {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 47px;
  }
`;

const HeaderComponent = () => {
  return (
    <HeaderAdminStyle>
      <h3 className="title-header">Overview</h3>
      <div className="search-wrapper">
        <img src={SearchIcon} alt="search-icon"></img>
        <input
          placeholder="Search..."
          className="search-input"
          type="text"
        ></input>
      </div>
      <div className="flex-container1">
        <div className="Group-icon">
          <img src={MenuIcon} alt="menu-icon"></img>
          <img src={BellIcon} alt="bell-icon"></img>
        </div>
        <img src={Avatar} alt="avatar" />
      </div>
    </HeaderAdminStyle>
  );
};
export default HeaderComponent;
