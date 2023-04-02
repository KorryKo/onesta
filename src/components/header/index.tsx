import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <nav className="bg-primaryLight3">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                priority={true}
                src="/onesta-icon.png"
                alt="Onesta"
                width={40}
                height={40}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
