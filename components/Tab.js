import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'





const Tab = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Home", src: "Setting", link : "/"},
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } colorGradient h-screen p-5  pt-8 relative duration-300 `}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-purple-800
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src="/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            width={25}
            height={25}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Name
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.src}.png`} />
              <Link href={`${Menu.link}`} ><span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Tab;