import { Layout, Space } from "antd";
import HeaderComponent from "components/Header/HeaderAdmin";
import { SiderComponent } from "components/Sider";
import { Outlet } from "react-router-dom";
import { Chart1 } from "components/Chart";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  height: "auto",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#E5E5E5",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#E5E5E5",
};
const siderStyle = {
  textAlign: "center",
  height: "100vh",
  lineHeight: "100vh",
  color: "#1E2832",
  backgroundColor: "#ffffff",
};
const footerStyle = {
  textAlign: "center",
  color: "#000000",
  backgroundColor: "#7dbcea",
};

const PrimaryLayoutAdmin = ({ children }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider width={"315px"} style={siderStyle}>
          <SiderComponent></SiderComponent>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <HeaderComponent></HeaderComponent>
          </Header>
          {children}
          <Content style={contentStyle}>
            <Chart1></Chart1>
            <Outlet />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default PrimaryLayoutAdmin;
