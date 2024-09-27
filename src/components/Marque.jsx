import React from 'react'
import Marquee from 'react-fast-marquee'
function Marque({url}) {
  return (
    <div className="w-full flex overflow-hidden gap-10 mb-2 ml-10">
        {url.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-28 h-20 object-contain flex-shrink-0"
          />
        ))}
    </div>
  );
}

export default Marque
