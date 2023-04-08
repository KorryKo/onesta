import { MENU_ITEMS } from "@/global/constants";
import LeftMenu from "../left-menu";
import Header from "../header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<any> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div>
          <LeftMenu menuItems={MENU_ITEMS} />
        </div>
        <div className="w-4/5  mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
