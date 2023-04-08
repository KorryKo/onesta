import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";

const Growers: React.FC = () => {
  const growersBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Agricultores", path: "/growers" },
  ];

  return (
    <Layout>
      <Breadcrumbs items={growersBradcrumbs} />
      <h1>Growers</h1>
    </Layout>
  );
};

export default Growers;
