import { PrimaryLayoutAdmin } from "components/Layout";
import { Helmet } from "react-helmet";

const Admin = () => {
  return (
    <PrimaryLayoutAdmin>
      <Helmet>
        <title>Lisa Store Admin</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </PrimaryLayoutAdmin>
  );
};

export default Admin;
