import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import { MenuItems, CommodityData, Commodity } from "@/global/types";
import DataTable from "@/components/data-table";
import { useEffect, useState } from "react";

const Fruits: React.FC = () => {
  const [page, setPage] = useState(1);
  const [commoditiesData, setCommoditiesData] = useState<Commodity[]>([]);
  const [count, setCount] = useState(0);

  const fruitsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Frutas", path: "/fruits" },
  ];

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch(
        `https://testapi.onesta.farm/v1/commodities?page=${page}`
      );
      const data: CommodityData = await res.json();
      setCommoditiesData(data.commodities);
      setCount(data.count);
    };

    fetchClients().then();
  }, [page]);

  return (
    <Layout>
      <Breadcrumbs items={fruitsBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">Frutas</h1>
      <hr className="border border-lightGray2" />
      <DataTable
        data={commoditiesData}
        page={page}
        setPage={setPage}
        count={count}
      />
    </Layout>
  );
};

export default Fruits;
