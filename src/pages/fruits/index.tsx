import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import { MenuItems } from "@/global/types";

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

  const tableRows = Object.keys(commodities[0]);
  return (
    <Layout>
      <div>
        <Breadcrumbs items={fruitsBradcrumbs} />
        <h1>fruits</h1>
      </div>
    </Layout>
  );
};

export default Fruits;
