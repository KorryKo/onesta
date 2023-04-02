import { MENU_ITEMS } from "@/global/constants";
import LeftMenu from "../left-menu";
import Header from "../header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<any> = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-screen" style={{ display: "flex" }}>
        <LeftMenu menuItems={MENU_ITEMS} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
