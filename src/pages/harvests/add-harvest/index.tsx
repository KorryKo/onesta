import Layout from "@/components/layout";
import {MenuItems} from "@/global/types";
import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";

const AddHarvest = () => {
    const harvestsBradcrumbs: MenuItems[] = [
        {title: "Inicio", path: "/"},
        {title: "Cosechas", path: "/harvests"},
        {title: "Agregar nueva cosecha", path: "/add-harvest"}
    ];
    return (
        <Layout>
            <Breadcrumbs items={harvestsBradcrumbs}/>
            <div className="flex items-center">
                <Link href="/harvests" className="mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
                    </svg>
                </Link>
                <h1 className="font-normal text-2xl my-6 font-bold">Agregar nueva cosecha</h1>
            </div>
            <hr className="border border-lightGray2"/>
        </Layout>
    )
}

export default AddHarvest