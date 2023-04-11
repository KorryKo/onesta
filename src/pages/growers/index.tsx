import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems, GrowersData, Grower } from "@/global/types";
import { useEffect, useState } from "react";

const Growers: React.FC = () => {
  const [page, setPage] = useState(1);
  const [growersData, setGrowersData] = useState<Grower[]>([]);
  const [count, setCount] = useState(0);

  const growersBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Agricultores", path: "/growers" },
  ];

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch(
        `https://testapi.onesta.farm/v1/growers?page=${page}`
      );
      const data: GrowersData = await res.json();
      setGrowersData(data.growers);
      setCount(data.count);
    };
    fetchClients().then();
  }, [page]);

  return (
    <Layout>
      <Breadcrumbs items={growersBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">Agricultores</h1>
      <hr className="border border-lightGray2" />
      <DataTable
        data={growersData}
        page={page}
        setPage={setPage}
        count={count}
      />
    </Layout>
  );
};

export default Growers;
