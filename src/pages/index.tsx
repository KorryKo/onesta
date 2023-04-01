import Header from "./header";
import LeftMenu from "./left-menu";
import { MENU_ITEMS } from "@/global/constants";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <LeftMenu menuItems={MENU_ITEMS} />
    </div>
  );
}
