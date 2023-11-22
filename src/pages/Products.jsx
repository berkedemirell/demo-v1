import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, currentCategories, cat, setCat } =
    useContext(ProductContext);
  const [pro, setPro] = useState(products.products);
  const [page, setPage] = useState(0);
  const [productsPerPage] = useState(8);
  const [aa, setAa] = useState([]);
  const [sliceProducts, setSliceProducts] = useState(8);

  // const cats = new Set(products.products.map((p) => {
  //   return p.category
  // }))
  // const asdd = Array.from(cats)

  const deneme = Math.ceil(pro.length / productsPerPage);

  useEffect(() => {
    let sd = [];
    for (let i = 1; i <= deneme; i++) {
      sd.push(i);
    }
    if (sd.length !== 0) {
      setAa(sd);
    }
  }, [deneme]);

  const setDeneme = (e) => {
    e.preventDefault();
    setPage(0);
    setSliceProducts(8);
    setCat(e.target.id.toLowerCase());
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (sliceProducts >= pro.length) {
      return;
    } else {
      setPage((prev) => prev + productsPerPage);
      setSliceProducts((prev) => prev + productsPerPage);
    }
    window.scrollTo(0, 0);
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (page === 0) {
      return;
    } else {
      setPage((prev) => prev - productsPerPage);
      setSliceProducts((prev) => prev - productsPerPage);
    }
    window.scrollTo(0, 0);
  };

  const deleteCat = (e) => {
    e.preventDefault();
    setPage(0);
    setSliceProducts(8);
    setCat(null);
    setPro(products.products);
  };

  const toPage = (e) => {
    e.preventDefault();
    if (e.target.id === 1) {
      setPage(0);
      setSliceProducts(8);
    } else {
      setPage(Number(e.target.id - 1) * productsPerPage);
      setSliceProducts(Number(e.target.id) * productsPerPage);
    }
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (cat !== null) {
      const newState = products.products.filter((p) => {
        if (p.category.toLowerCase() === cat.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      });
      setPro(newState);
    }
  }, [cat, products]);

  return (
    <div className="relative">
      {cat !== null && (
        <div className="flex flex-row items-center gap-2 absolute -top-6 left-72 mmd:left-52 bg-slate-300 text-slate-950 font-bold capitalize rounded-lg pb-1 pt-1 pl-3 pr-3">
          <span className="smm:text-sm">{cat}</span>
          <button
            onClick={deleteCat}
            className="text-xl text-red-900 font-bold"
          >
            X
          </button>
        </div>
      )}
      <div className="flex flex-row gap-10 mmd:gap-4 mt-8 ssm:mt-2 ssm:flex-col" id="prod-div">
        <div className="flex flex-col items-start bg-main mmd:gap-2 p-2 ml-2 ssm:ml-0 ssm:w-fit ssm:flex-row ssm:flex-wrap ssm:gap-4 rounded-lg pl-6 pr-6 ssm:pl-2 ssm:pr-2">
          {currentCategories.map((a, i) => {
            return (
              <Link
                key={i}
                id={a}
                onClick={setDeneme}
                className="text-lg text-mainWhite hover:text-slate-950 transition-all dutation-500 mmd:text-sm ssm:underline"
              >
                <span className="capitalize font-bold" id={a}>
                  {a}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="">
          <div className=" grid grid-cols-4 llg:grid-cols-3 lgs:grid-cols-2 ssm:grid-cols-2 ssm:gap-2 gap-4 pt-4">
            {pro.slice(page, sliceProducts).map((d) => {
              return (
                <div
                  key={d.id}
                  className="border-2 border-slate-200 ssm:ml-auto ssm:mr-auto w-60 mmd:w-48 flex flex-col items-center rounded-xl shadow-pro-card smm:w-44 ssm:w-42"
                >
                  <div className="border-b border-main">
                    <img
                      src={d.image}
                      alt=""
                      className="w-60 h-40 rounded-t-xl smm:h-32 ssm:h-28"
                    />
                  </div>
                  <div className="p-2 pl-4 pr-4 text-center h-40 text-slate-950 flex flex-col justify-between">
                    <div>
                      <Link className="text-xl font-bold hover:text-main transition-all duration-500 smm:text-lg">
                        {d.title}
                      </Link>
                      <p className="font-bold text-sm mt-1 smm:m-0 smm:text-xs">
                        {d.description.split(" ").slice(0, 7).join(" ")}...
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="hover-button text-center bg-main text-slate-50 w-20 smm:w-12 smm:h-6 h-8 font-bold rounded-md">
                        <p className="hover-button--off text-sm smm:text-xs">Detay</p>
                        <span className="hover-button--on text-2xl transition-all smm:text-xl">
                          &rarr;
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row items-center justify-center gap-4 mt-4 ssm:mt-8 text-lg">
            <button onClick={prevPage} className="text-2xl smm:text-xl font-bold ssm:text-lg">
              &larr;
            </button>
            {aa.map((a) => {
              return (
                <button
                  id={a}
                  onClick={toPage}
                  className={`${
                    a === sliceProducts / productsPerPage
                      ? "bg-main text-slate-50"
                      : ""
                  } p-1 pl-3 pr-3 rounded-full smm:text-sm ssm:text-xs`}
                  key={a}
                >
                  {a}
                </button>
              );
            })}
            <button onClick={nextPage} className="text-2xl font-bold smm:text-xl ssm:text-lg">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
