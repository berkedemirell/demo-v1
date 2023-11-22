import { Link } from "react-router-dom"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const hakk = ['Hakkımızda', 'Ürünler', 'Markalar', 'Şubeler', 'Gizlilik Politikamız', 'Aydınlatma Metni']


const Footer = () => {
  return (
    <div className="bg-main text-mainWhite mt-20 relative">
      <div className="flex flex-row mmd:grid mmd:grid-cols-2 mmd:gap-6 items-start gap-24 pt-6 pb-12 justify-evenly p-4 pl-12 mmd:pl-2 mmd:pr-2 pr-12">
        <div className="mt-auto mb-auto flex flex-col items-center justify-center mmd:col-start-2 mmd:row-start-2">
            <Link className="">
              <img src="https://www.depostar.com/Data/EditorFiles/Logo.png" className="h-12 lgs:h-8" alt="" />
            </Link>
            <p className="font-bold text-sm mt-2 opacity-70 lgs:text-xs -ml-4 lgs:absolute lgs:bottom-0 lgs:left-8">Star Elektronik <span className="">&copy;</span> Tüm Haklar Saklıdır.</p>
        </div>
          <div className="mmd:flex mmd:items-center mmd:flex-col col-start-1 row-start-1">
            <div className="mb-2 mmd:mb-1">
              <h1 className="text-md uppercase underline font-bold lgs:text-sm">Kurumsal</h1>
            </div>
            <div className="text-sm font-bold flex flex-col mmd:items-center lgs:text-xs">
              {hakk.map((h) => {
                return (
                  <Link key={h} className="hover:text-slate-950 transition-all duration-500">{h}</Link>
                )
              })}
            </div>
          </div>
          <div className="mmd:flex mmd:flex-col mmd:items-center">
            <div className="mb-2 mmd:mb-1">
              <h1 className="text-md uppercase underline font-bold lgs:text-sm lgs:w-24">Sosyal Medya</h1>
            </div>
            <div className="flex flex-col items-center gap-1 text-3xl lgs:text-2xl">
              <Link className=" hover:text-slate-950 transition-all duration-500"><AiFillFacebook/></Link>
              <Link className="hover:text-slate-950 transition-all duration-500"><AiFillTwitterSquare/></Link>
              <Link className="hover:text-slate-950 transition-all duration-500"><AiOutlineInstagram/></Link>
            </div>
          </div>
          <div className="mt-auto mb-auto font-bold text-lg lgs:text-sm mmd:row-start-2 mmd:col-start-1 mmd:flex mmd:items-center mmd:justify-center mmd:flex-col">
            <p>info@starelektronik.com</p>
            <p>(0242) 243 69 93</p>
          </div>
      </div>
    </div>
  )
}

export default Footer