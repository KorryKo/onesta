import Breadcrumbs from "@/components/breadcrumbs";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";

const Clients: React.FC = () => {
  const clientsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Clientes", path: "/clients" },
  ];

  return (
    <Layout>
      <div>
        <Breadcrumbs items={clientsBradcrumbs}/>
      <h1>Clients</h1>
      </div>
    </Layout>
  );
};

export default Clients;
