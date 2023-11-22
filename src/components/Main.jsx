import { useEffect, useState } from "react";
// import { AiFillCaretRight } from "react-icons/ai";
// import { AiFillCaretLeft } from "react-icons/ai";
import img1 from "../source/image/sony.jpg";
import img2 from "../source/image/xtar.jpg";
import img3 from "../source/image/tplink.jpg";
import img4 from "../source/image/prolink.jpg";
import MainFavs from "./MainFavs";
import Contact from "./Contact";


const Main = () => {
  const [element, setElement] = useState(null);
  const [images] = useState([
    {
      id:1,
      src: img2,
    },
    {
      id:2,
      src: img1,
    },
    {
      id:3,
      src: img3,
    },
    {
      id:4,
      src: img4,
    }
  ])

  const [activeImg, setActiveImg] = useState(images[0])

  // const goNext = useCallback((e) => {
  //   e.preventDefault();
  //   const pos = element.scrollLeft;
  //   if (pos + (element.scrollWidth / 4) > 3050) {
  //     setActiveImg(images[0])
  //     element.scrollTo(0, 0);
  //   } else {
  //     if(pos%(element.scrollWidth / 4) === 0) {
  //       element.scrollTo(pos + (element.scrollWidth / 4), 0);
  //       setActiveImg(images[activeImg.id])
  //     } else {
  //       return
  //     }
  //   }
  // }, [element, setActiveImg, activeImg, images]);
  // const goBack = (e) => {
  //   e.preventDefault();
  //   const pos = element.scrollLeft;
  //   if (element.scrollLeft < 700) {
  //     setActiveImg(images[0])
  //   } else {
  //     if(pos%(element.scrollWidth / 4) === 0) {
  //       element.scrollTo(pos - (element.scrollWidth / 4), 0);
  //       setActiveImg(images[activeImg.id - 2])
  //     } else {
  //       return
  //     }
  //   }
  // };

  const toSlide = (e) => {
    e.preventDefault();
    setActiveImg(images[e.target.id])
    element.scrollTo((element.scrollWidth / 4)*Number(e.target.id), 0)

  }

  useEffect(() => {
    let availableXWidth = document.getElementById("carousel-div");
    if (availableXWidth) {
      setElement(availableXWidth);
    }
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (element?.scrollLeft + 766 > 3050) {
  //       setActiveImg(images[0])
  //       element?.scrollTo(0, 0);
  //     } else {
  //       if(element?.scrollLeft%766 === 0) {
  //         element?.scrollTo(element?.scrollLeft + 766, 0);
  //         setActiveImg(images[activeImg?.id])
  //       } else {
  //         return
  //       }
  //     }
  //   }, 4000)

  //   return () => clearInterval(interval)
  // }, [element, setActiveImg, activeImg, images])


  return (
    <div>

      <div className="flex items-center justify-center flex flex-col relative">
        <div
          id="carousel-div"
          className="border border-slate-200 w-deneme mmd:w-deneme-md xss:w-deneme-xs 3xl:w-deneme-2xl 2xl:w-deneme-xl flex flex-row overflow-hidden mt-6 rounded-md"
        >
          {images.map((i) => {
            return (
              <img key={i.id} src={i.src} alt="" className="w-car-image xss:w-car-image-xs xss:h-car-image-xs 2xl:w-car-image-xl mmd:w-car-image-md mmd:h-car-image-md 2xl:h-car-image-xl 3xl:h-car-image-2xl 3xl:w-car-image-2xl h-car-image"/>
            )
          })}
        </div>
        <div className="flex flex-row items-center justify-between absolute gap-btn">
        </div>
        <div className="flex flex-row items-center justify-center 2xl:gap-6 gap-4 mt-2">
          {images.map((im) => {
              return (
                <button onClick={toSlide} id={im.id - 1} key={im.id} className={`transition-all duration-500 w-4 h-4 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8 border-2 border-main rounded-full ${im.src === activeImg.src ? 'bg-main' : ''}`}></button>
              )
          })}
        </div>
      </div>
      <MainFavs/>
      <Contact/>
    </div>
  );
};

export default Main;
