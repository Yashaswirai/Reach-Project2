import React from "react";

function Footer() {
  return (
    <div className="w-full pt-10">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <div className="">
            <h1 className="text-[11rem] font-bold font-[satoshi] leading-none tracking-tighter">refokus.</h1>
        </div>
        <div className="ml-40">
            <h1 className="text-xl font-bold text-zinc-700 mb-10">Socials</h1>
            {["Instagram", "Facebook", "Twitter(X?)", "LinkedIn"].map((name, index) => (
                <h2 className="text-zinc-500 text-sm mb-2 font-semibold" key={index}>{name}</h2>
            ))}
        </div>
        <div className="ml-16">
            <h1 className="text-xl font-bold text-zinc-700 mb-10">Sitemap</h1>
            {["Home", "Work", "Careers", "Contact"].map((name, index) => (
                <h2 className="text-sm mb-2 font-semibold font-[satoshi]" key={index}>{name}</h2>
            ))}
        </div>
        <div className="ml-16 flex flex-col items-end justify-end">
            <h1 className="w-[12rem] text-lg font-semibold leading-none text-right mb-14">Refokus is a pioneering digital agency driven by design and empowered by technology.</h1>
            <img className="w-[10rem]" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-8 py-6">
        {["Privacy Policy","Cookie Policy","Impressum","Terms"].map((name, index) => (
            <h2 className="text-sm font-semibold font-[satoshi] text-zinc-500" key={index}>{name}</h2>
        ))}
      </div>
    </div>
  );
}

export default Footer;
