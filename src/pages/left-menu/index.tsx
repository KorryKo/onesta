import Link from "next/link";

const LeftMenu: React.FC = () => {
  const menuItems = [
    { title: "Frutas", path: "/" },
    { title: "Cosechas", path: "/cosechas" },
    { title: "Agricultores", path: "/gricultores" },
    { title: "Clientes", path: "/clientes" },
  ];

  return (
    <nav className="w-64 shadow  min-h-full mt-0">
      <ul className="pt-8">
        {menuItems.map((menuItem) => (
          <li key={menuItem.path}>
            <Link href={menuItem.path}>
              <div className="px-4 py-2 hover:bg-primaryLight3 transition duration-300 ease-in-out">
                {menuItem.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftMenu;
