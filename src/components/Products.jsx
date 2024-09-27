import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A)-p-500.webp",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Amidst the AI revolution, we at Refokus decided to leverage our expertise in powerful and unique web design and development to address the growing confusion surrounding emerging technologies.",      
      live: true,
      case: false,
      img:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2cefa6def1aabe206b2f6_TTR%20-%2016%209%20(A).webp",
    },
    {
      title: "Culla",
      description:
        "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      img:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d807a86b09f3bb06b74d_Singularity%20-%2016%209%20(A)-min.webp",
    },
    {
      title: "Singularity",
      description:
        "We leveraged the momentum created by Singularity's rebrand, made by their design team, to push forward with a new site. We restructured the information architecture and enabled a CMS for sustainable growth, while taking the UI to new heights with a range of animated assets and interactions.",
      live: true,
      case: true,
      img:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A)-p-500.webp"
    },
  ];

  const [pos, setPos] = useState(-18);

  const mover = (val) => {
    setPos(val * 18);
  };

  return (
    <div className="w-full my-28 relative">
      {products.map((item, idx) => (
        <Product key={idx} val={item} count={idx} mover={mover} />
      ))}
      <motion.div
        initial={{ y: pos }}
        animate={{ y: pos + `rem` }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      >
        <div className="absolute left-1/3 w-[23rem] h-[18rem] rounded-md overflow-hidden">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.5 }}
              className="w-full h-full bg-red-200"
            >
              <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Products;
