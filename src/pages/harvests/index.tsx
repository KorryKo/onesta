import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { GetServerSideProps } from "next";

interface HarvestsPageProps {
  harvests: Harvest[];
}

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

export const getServerSideProps: GetServerSideProps<
  HarvestsPageProps
> = async (): Promise<{ props: HarvestsPageProps }> => {
  const res = await fetch("https://testapi.onesta.farm/v1/harvests");
  const data: HarvestsData = await res.json();
  return { props: { harvests: data.harvests } };
};

const Harvests: React.FC<HarvestsPageProps> = ({ harvests }) => {
  const harvestsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Cosechas", path: "/harvests" },
  ];

  return (
    <Layout>
      <Breadcrumbs items={harvestsBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">harvests</h1>
      <hr className="border border-lightGray2" />
      <DataTable data={harvests} />
    </Layout>
  );
};

export default Harvests;
