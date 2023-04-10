import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { useEffect, useState } from "react";

interface Harvest {
  id: string;
  grower: Grower;
  farm: Farm;
  client: Client;
  commodity: Comodity;
  variety: Variety;
  createdAt: string;
}

interface Grower {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

interface Farm {
  id: string;
  name: string;
  address: string;
}

interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

interface Comodity {
  id: string;
  name: string;
}

interface Variety {
  id: string;
  name: string;
}

interface HarvestsData {
  harvests: Harvest[];
  count: number;
}

const Harvests: React.FC = () => {
  const [page, setPage] = useState(1);
  const [harvestsData, setHarvestsData] = useState<Harvest[]>([]);
  const [count, setCount] = useState(0);

  const harvestsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Cosechas", path: "/harvests" },
  ];

  useEffect(() => {
    const fetchHarvests = async () => {
      const res = await fetch(
        `https://testapi.onesta.farm/v1/harvests?page=${page}`
      );
      const data: HarvestsData = await res.json();
      setHarvestsData(data.harvests);
      setCount(data.count);
    };
    fetchHarvests().then();
  }, [page]);

  return (
    <Layout>
      <Breadcrumbs items={harvestsBradcrumbs} />
      <a
        href="/harvests/add-harvest"
        style={{ backgroundColor: "blue", color: "white", padding: "16px" }}
      >
        agregar cosecha
      </a>
      <h1 className="font-normal text-2xl my-6">harvests</h1>
      <hr className="border border-lightGray2" />
      <DataTable
        data={harvestsData}
        page={page}
        setPage={setPage}
        count={count}
      />
    </Layout>
  );
};

export default Harvests;
