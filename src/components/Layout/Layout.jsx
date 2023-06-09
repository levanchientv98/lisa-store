import styled from "styled-components";
import { Header } from "components/Header";
import { Content } from "components/Content";
import { Footer } from "components/Footer";

const LayoutStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22%22");
  font-family: "Roboto", sans-serif;
  width: 1920px;
  margin: 0 auto;
  //Màn hình Moblie
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PrimaryLayout = ({ children }) => (
  <LayoutStyle>
    {children}
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </LayoutStyle>
);
export default PrimaryLayout;
