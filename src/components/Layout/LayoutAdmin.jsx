import { Layout, Space } from "antd";
import { SiderComponent } from "components/Sider";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
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

const PrimaryLayoutAdmin = () => {
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
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <Outlet />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default PrimaryLayoutAdmin;
