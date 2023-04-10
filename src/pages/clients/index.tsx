import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { useEffect, useState } from "react";

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

const Clients: React.FC = () => {
  const [page, setPage] = useState(1);
  const [clientsData, setClientsData] = useState<Client[]>([]);
  const [count, setCount] = useState(0);

  const clientsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Clientes", path: "/clients" },
  ];

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch(
        `https://testapi.onesta.farm/v1/clients?page=${page}`
      );
      const data: ClientsData = await res.json();
      setClientsData(data.clients);
      setCount(data.count);
    };
    fetchClients().then();
  }, [page]);

  return (
    <Layout>
      <Breadcrumbs items={clientsBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">Clients</h1>
      <hr className="border border-lightGray2" />
      <DataTable
        data={clientsData}
        page={page}
        setPage={setPage}
        count={count}
      />
    </Layout>
  );
};

export default Clients;
