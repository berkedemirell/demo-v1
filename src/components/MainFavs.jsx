import { useContext } from "react";
import {ProductContext} from '../context/ProductContext.jsx'


import { Link } from "react-router-dom";


 const MainFavs = () => {
    const {products} = useContext(ProductContext);

  return (
    <div className="mt-12">
        <h1 className="text-center text-4xl p-4 pb-10 font-bold mmd:text-3xl">Öne Çıkan Ürünler</h1>
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 mmd:grid-cols-2 mmd:gap-x-12 smm:gap-x-6 gap-x-36 xss:gap-x-2 lgs:gap-x-4 gap-y-12 lgs:gap-y-4 items-center justify-center">
                {products.products.slice(0,6).map((d) => {
                    return (
                    <div key={d.id} className="border-2 border-slate-200 3xl:w-80 w-64 flex flex-col lgs:w-52 xss:w-44 items-center rounded-xl shadow-pro-card">
                        <div className="border-b border-main">
                            <img src={d.image} alt="" className="w-64 3xl:w-80 h-40 xss:h-36 3xl:h-48 rounded-xl"/>
                        </div>
                        <div className="p-2 pl-4 pr-4 text-center h-40 text-slate-950 flex flex-col justify-between">
                            <div>
                                <Link className="text-xl font-bold hover:text-main transition-all duration-500 3xl:text-2xl xss:text-lg">{d.title}</Link>
                                <p className="font-bold text-sm mt-1 3xl:text-lg xss:text-xs">{d.description.split(' ').slice(0,7).join(' ')}...</p>
                            </div>
                            <div className="text-center">
                                <button className="hover-button text-center bg-main text-slate-50 w-20 h-8 font-bold rounded-md">
                                    <p className="hover-button--off text-sm">Detay</p>
                                    <span className="hover-button--on text-2xl transition-all">&rarr;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })}  
            </div>

        </div>
    </div>
  )
}

export default MainFavs