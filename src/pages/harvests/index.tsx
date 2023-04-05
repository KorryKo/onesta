import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";

const Harvests: React.FC = () => {
  const harvestsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Cosechas", path: "/harvests" },
  ];

  return (
    <Layout>
      <div>
        <Breadcrumbs items={harvestsBradcrumbs}/>
        <h1>harvests</h1>
      </div>
    </Layout>
  );
};

export default Harvests;
