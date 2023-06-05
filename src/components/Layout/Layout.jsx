import { Layout, Space } from "antd";
import { Header } from "components/Header";

const { Footer, Content } = Layout;

const LayoutStyle = {
  fontFamily: "Roboto",
};

const headerStyle = {
  textAlign: "center",
  color: "#0a0a0a",
  height: "auto",
  with: "100%",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#F0F0F0",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const PrimaryLayout = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout style={LayoutStyle}>
      <Header style={headerStyle}></Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);
export default PrimaryLayout;
