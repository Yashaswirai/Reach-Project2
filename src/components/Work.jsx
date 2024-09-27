import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.dribbble.com/userupload/13541292/file/still-24dc32bf0d6fa3550ef87bbd966c94b7.png?resize=400x0",
      top: "45%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp",
      top: "45%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b216eeb2587178cacfc781_macbook-16-pro-mockup-on-concrete-background-front-view.webp",
      top: "55%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d53e25385e299ff4542b_Showcase%20-%2016%209%20(A).webp",
      top: "60%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://www.cssdesignawards.com/cdasites/2022/202204/20220427133337.jpg",
      top: "68%",
      left: "50%",
      isActive: false,
    },
  ])
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const showNhide = (arr) =>{
      setImages(prev=>(
        prev.map((elem,idx)=>{
          return arr.indexOf(idx) === -1 ? {...elem, isActive: false} : {...elem, isActive: true}
        }
      ))
  )}
    switch (Math.floor(latest*100)) {
      case 0:
        showNhide([])
        break;
      case 1:
        showNhide([0])
        break;
      case 3:
        showNhide([0,1])
        break;
      case 5:
        showNhide([0,1,2])
        break;
      case 7:
        showNhide([0,1,2,3])
        break;
      case 9:
        showNhide([0,1,2,3,4])
        break;
      default:
        break;
    }
  });
  return (
    <div className="max-w-screen-xl mx-auto select-none mt-10 relative">
      <h1 className="text-[50vh] leading-none text-center font-semibold">
        WORK
      </h1>
      <div className="w-full h-full absolute top-0">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className="w-1/5 absolute -translate-x-1/2 -translate-y-1/2 "
            style={{ top: elem.top, left: elem.left }}
          >
            {elem.isActive && (
              <img
                className="w-full h-full object-cover"
                src={elem.url}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
