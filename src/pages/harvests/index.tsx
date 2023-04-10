import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="my-6 flex justify-between items-baseline">
        <h1 className="font-normal text-2xl">Cosechas</h1>
        <Link href={"/harvests/add-harvest"}>
          <button className="bg-primary text-white py-2.5 px-6 self-end rounded-full flex"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="ml-2">Agregar cosecha</span>
          </button>
        </Link>
      </div>
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
