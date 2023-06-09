import { PrimaryLayout } from "components/Layout";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <PrimaryLayout>
      <Helmet>
        <title>Lisa Store</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </PrimaryLayout>
  );
};

export default Home;
