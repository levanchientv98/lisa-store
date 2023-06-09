import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ReactComponent as DashboardIcon } from "assets/dashboard-icon.svg";
import { ReactComponent as ProductIcon } from "assets/Products-icon.svg";
import { ReactComponent as CustomerIcon } from "assets/Customer-icon.svg";
import { ReactComponent as OrdersIcon } from "assets/Oder-icon.svg";
import { ReactComponent as ShipmentIcon } from "assets/shipping-truck-icon.svg";
import { ReactComponent as TransactionIcon } from "assets/creditcard-icon.svg";
import { ReactComponent as SetingIcon } from "assets/Setting-icon.svg";
import { ReactComponent as LogoutIcon } from "assets/Logout-icon.svg";

const SiderStyle = styled.div`
  width: 100%;
  .title-page {
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 0;
    padding-bottom: 103px;
    /* padding: 65px 64px 103px 60px; */
    box-sizing: border-box;
  }
  .menu-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      color: #cdcdcd;
    }

    a:hover {
      color: #ff6f61;
      font-weight: 600;
    }
    li:hover {
      svg {
        filter: invert(52%) sepia(29%) saturate(1083%) hue-rotate(316deg)
          brightness(101%) contrast(101%);
      }
    }
    .ant-menu-item {
      margin-left: 45px;
      margin-bottom: 3vh;
    }
  }
  .ant-menu-item {
    width: 250px;
  }

  /* li:first-child {
    svg {
      filter: invert(82%) sepia(6%) saturate(11%) hue-rotate(17deg)
        brightness(101%) contrast(91%);
    }
  } */
`;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">DashBoard</Link>, "1", <DashboardIcon />),
  getItem(<Link to="/Product">Product</Link>, "2", <ProductIcon />),
  getItem(<Link to="/Customers">Customers</Link>, "3", <CustomerIcon />),
  getItem(<Link to="/Orders">Orders</Link>, "4", <OrdersIcon />),
  getItem(<Link to="/Shipments">Shipments</Link>, "5", <ShipmentIcon />),
  getItem(
    <Link to="/Transactions">Transactions</Link>,
    "6",
    <TransactionIcon />
  ),
  getItem(<Link to="/Settings">Settings</Link>, "7", <SetingIcon />),
  getItem(<Link to="/Logout">Logout</Link>, "8", <LogoutIcon />),
];

const SiderComponent = () => {
  return (
    <SiderStyle>
      <h3 className="title-page">Lisa Admin</h3>
      <div className="menu-page">
        <Menu theme="light" mode="inline" items={items} />
      </div>
    </SiderStyle>
  );
};
export default SiderComponent;
