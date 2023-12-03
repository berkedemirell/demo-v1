import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";

const Navbar = () => {
  const { currentCategories, setCat, currentBrands } =
    useContext(ProductContext);
  const [linkDatas, setLinkDatas] = useState([
    {
      id: 1,
      title: "Anasayfa",
      to: "/",
    },
    {
      id: 2,
      title: "Kurumsal",
      isDropped: false,
      to: "/",
      droppedContent: ["Hakkımızda", "Sertifikalarımız", "Kel Kafalı Buraq"],
    },
    {
      id: 3,
      title: "Ürünlerimiz",
      isDropped: false,
      to: "/products",
      droppedContent: currentCategories,
    },
    {
      id: 4,
      title: "Markalarımız",
      isDropped: false,
      to: "/brands",
      droppedContent: currentBrands,
    },
    {
      id: 5,
      title: "İletişim",
      isDropped: false,
      to: "/",
      droppedContent: ["Şubeler", "Banka Hesapları"],
    },
  ]);
  const [isMobileDropped, setIsMobileDropped] = useState(false)


  const handleMobileDrop = (e) => {
    e.preventDefault();
    setIsMobileDropped((prev) => !prev)
  }


  const handleGoProduct = (e) => {
    setCat(e.target.id.toLowerCase());
  };

  const handleEnterDrop = (e) => {
    e.preventDefault();
    const newState = linkDatas.map((l) => {
      if (l.title === e.target.id) {
        if (l.isDropped === undefined) {
          return l;
        } else {
          return { ...l, isDropped: true };
        }
      } else {
        return l;
      }
    });

    setLinkDatas(newState);
  };

  const handleLeaveDrop = (e) => {
    e.preventDefault();
    const newState = linkDatas.map((l) => {
      if (l.isDropped === true) {
        return { ...l, isDropped: false };
      } else {
        return l;
      }
    });
    setLinkDatas(newState);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between pl-24 pr-24 smm:pr-12 p-4">
        <div className="rounded-lg p-2">
          <Link>
            <img
              src="https://www.depostar.com/Data/EditorFiles/Logo.png"
              alt=""
              className="-translate-y-4 lgs:h-12 mmd:-translate-y-3 -translate-x-14 h-16 mmd:h-10 smd:h-8 smm:-translate-y-2"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-64 llg:gap-32 mmd:gap-12 3xl:gap-nav-xl">
          <div className="flex flex-row items-center relative ssm:hidden">
            <input
              type="text"
              className="border-2 border-slate-400 h-10 w-search-input lgs:w-64 rounded-xl p-2 llg:w-llg-search-input mmd:w-52 mmd:h-8 smm:w-40"
              placeholder="Ürün ara..."
            />
            <Link className="text-2xl absolute right-2">
              <AiOutlineSearch />
            </Link>
          </div>
          <div>
            <select className="p-1 rounded-md border border-slate-950 pl-2 pr-2 smd:p-1 cursor-pointer">
              <option className="" value="tr">
                TR
              </option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-main p-6 text-slate-50 smd:pl-2 smd:pr-2">
        <div className="flex flex-row items-center ssm:hidden justify-evenly">
          {linkDatas.map((l) => {
            return (
              <div
                key={l.id}
                className="text-xl relative 3xl:text-2xl mmd:text-lg smm:text-sm"
              >
                <Link
                  id={l.title}
                  className="font-bold hover:opacity-100 opacity-90 transition-all duration-500"
                  to={l.to}
                  onMouseLeave={handleLeaveDrop}
                  onMouseEnter={handleEnterDrop}
                >
                  {l.title}
                </Link>
                {l.isDropped && (
                  <div
                    id={l.id}
                    className="absolute flex flex-col smm:-left-24 justify-center rounded-md w-52 smm:w-44 top-6 z-10 bg-blue-900 pl-2 pr-2 transition-all duration-500"
                    onMouseEnter={handleEnterDrop}
                    onMouseLeave={handleLeaveDrop}
                  >
                    {l.droppedContent.map((c) => {
                      return (
                        <Link
                          key={c}
                          onClick={
                            l.title === "Ürünlerimiz" ? handleGoProduct : ""
                          }
                          id={c}
                          to={l.to}
                          className="p-1 hover:bg-blue-800 3xl:text-2xl pt-2 border-b rounded-md capitalize"
                        >
                          <span
                            id={c}
                            className="text-slate-50 text-lg font-bold  mmd:text-sm"
                          >
                            {c}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center justify-between pl-4 pr-10">
          <div className="flex flex-row items-center relative w-mob-search-input hidden ssm:flex">
            <input
              type="text"
              className="border-2 border-slate-400 relative h-10 w-mob-search-input rounded-xl p-2 text-slate-950"
              placeholder="Ürün ara..."
            />
            <Link className="text-2xl absolute right-2 text-slate-950">
              <AiOutlineSearch />
            </Link>
          </div>
          <div className="relative hidden ssm:inline-block">
            <button className="text-2xl rotate-90" onClick={handleMobileDrop}>
              ...
            </button>
            {isMobileDropped && 
              <div className="absolute z-10 right-4 gap-1 bg-main p-2 pl-3 pr-3 border-2 border-slate-50 rounded-md flex flex-col items-start">
                  {linkDatas.map((l) => {
                    return (
                      <Link onClick={() => setIsMobileDropped(false)} className="" to={l.to} key={l.id}>{l.title}</Link>
                    )
                  })}
              </div>
          
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
