import Breadcrumbs from "@/components/breadcrumbs";
import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import { MenuItems } from "@/global/types";
import { GetServerSideProps } from "next";

interface GrowersPageProps {
  growers: Grower[];
}

interface Grower {
  id: string;
  name: string;
  lastName: string;
  email: string;
  farms: Farms[];
}

interface Farms {
  id: string;
  name: string;
  address: string;
}

interface GrowersData {
  growers: Grower[];
  count: number;
}

export const getServerSideProps: GetServerSideProps<
  GrowersPageProps
> = async (): Promise<{ props: GrowersPageProps }> => {
  const res = await fetch("https://testapi.onesta.farm/v1/growers");
  const data: GrowersData = await res.json();
  return { props: { growers: data.growers } };
};

const Growers: React.FC<GrowersPageProps> = ({ growers }) => {
  const growersBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Agricultores", path: "/growers" },
  ];

  return (
    <Layout>
      <Breadcrumbs items={growersBradcrumbs} />
      <h1 className="font-normal text-2xl my-6">Growers</h1>
      <hr className="border border-lightGray2" />
      <DataTable data={growers} />
    </Layout>
  );
};

export default Growers;
