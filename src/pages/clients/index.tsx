import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { GetServerSideProps } from "next";

interface ClientsPageProps {
  clients: Client[];
}

interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

interface ClientsData {
  clients: Client[];
  count: number;
}

export const getServerSideProps: GetServerSideProps<
  ClientsPageProps
> = async (): Promise<{ props: ClientsPageProps }> => {
  const res = await fetch("https://testapi.onesta.farm/v1/clients");
  const data: ClientsData = await res.json();
  return { props: { clients: data.clients } };
};

const Clients: React.FC<ClientsPageProps> = ({ clients }) => {
  const clientsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Clientes", path: "/clients" },
  ];

  return (
    <Layout>
      <Breadcrumbs items={clientsBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">Clients</h1>
      <hr className="border border-lightGray2" />
      <DataTable data={clients} />
    </Layout>
  );
};

export default Clients;
