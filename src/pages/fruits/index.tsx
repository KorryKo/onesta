import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import { MenuItems } from "@/global/types";
import DataTable from "@/components/data-table";

interface CommodityPageProps {
  commodities: Commodity[];
}

interface Commodity {
  id: string;
  name: string;
  varieties: Variety[];
}

interface Variety {
  id: string;
  name: string;
}

interface CommodityData {
  commodities: Commodity[];
  count: number;
}

export const getServerSideProps: GetServerSideProps<
  CommodityPageProps
> = async (): Promise<{ props: CommodityPageProps }> => {
  const res = await fetch("https://testapi.onesta.farm/v1/commodities");
  const data: CommodityData = await res.json();
  return { props: { commodities: data.commodities } };
};

const Fruits: React.FC<CommodityPageProps> = ({ commodities }) => {
  const fruitsBradcrumbs: MenuItems[] = [
    { title: "Inicio", path: "/" },
    { title: "Frutas", path: "/fruits" },
  ];

  return (
    <Layout>
      <div className="w-4/5 mx-auto">
        <Breadcrumbs items={fruitsBradcrumbs} />
        <h1 className="font-normal text-2xl my-6" >fruits</h1>
        <hr className="border border-lightGray2" />
        <DataTable data={commodities} />
      </div>
    </Layout>
  );
};

export default Fruits;
