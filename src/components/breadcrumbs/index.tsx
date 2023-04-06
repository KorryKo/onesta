import Link from "next/link";

interface BreadcrumbItem {
  title: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="my-10">
      <ol className="flex">
        {items.map((item, index) => (
          <div className="flex" key={item.path}>
            <li>
              <Link
                className={`${
                  index == items.length-1 ? "text-dark before:/" : "text-light"
                } font-normal transition duration-150 ease-in-out hover:text-primary`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
            {index < items.length - 1 && (
              <li>
                <span className="text-dark ml-1">
                  /
                </span>
              </li>
            )}
          </div>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
