import { BiChevronDown } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { supportedCategories } from "constants";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// bottom sub links
const links = [
  { label: "Mens", to: "EcoVibe/Explore-Products/collections=men" },
  { label: "Womens", to: "EcoVibe/Explore-Products/collections=women" },
  { label: "Kids", to: "EcoVibe/Explore-Products/collections=Kids" },
  { label: "Electronics", to: "EcoVibe/Explore-Products/category=electronics" },
  { label: "Kitchen", to: "EcoVibe/Explore-Products/collections=kitchen" },
  { label: "News" },
  { label: "Contact Us" },
];

function MegaMenu() {
  // sub menu content state
  const [subMenu, setSubMenu] = useState(0);
  const navigate = useNavigate(); // navigate hook

  return (
    <div
      className={`${
        location.pathname === "/EcoVibe/" ? "flex" : "hidden"
      } items-center justify-between px-8 py-4 relative`}
    >
      {/* mega menu button */}
      <button className="px-4 py-3 bg-primary-500 text-white hover:bg-primary-700 transition-all rounded-md cursor-pointer flex items-center gap-x-2 group peer">
        {/* menu button */}
        <span className="text-2xl">
          <MdMenu />
        </span>
        <span>All Categories</span>
        <span
          className={`group-hover:rotate-180 text-3xl transition-all duration-300`}
        >
          <BiChevronDown />
        </span>
      </button>
      {/* mega menu (categories & product types) */}
      <div
        className={`invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all absolute top-[5.2rem] z-20`}
      >
        <div className="flex flex-col gap-y-2 px-4 py-2 w-72 rounded-md bg-slate-100 tooltip relative">
          {/* categories list */}
          {supportedCategories.map((category, index) => (
            <button
              onClick={() => setSubMenu(index)}
              key={index}
              className="text-lg group cursor-pointer peer focus:text-primary-400 text-slate-950 group hover:text-primary-400 transition-all flex items-center justify-between"
            >
              <span>{category.title}</span>
              <span className="text-xl">
                <IoIosArrowForward />
              </span>
            </button>
          ))}
          {/* product types menu (sub menu) */}
          <div className="absolute left-72 rounded-md top-0 mx-2 w-[50rem] h-72 bg-slate-100 hidden peer-focus:flex hover:flex items-center justify-between gap-x-5 px-4 py-2">
            <ul className="h-full w-1/3 flex flex-col gap-y-2 justify-evenly">
              {/* sub menu title */}
              <h4 className="text-2xl font-bold">New Arrivals</h4>
              {/* product type link */}
              {supportedCategories[subMenu].productTypes.map(
                ({ title }, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      navigate(
                        `/EcoVibe/Explore-Products/productTypes=${title.toLocaleLowerCase()}`
                      )
                    }
                    className="text-lg cursor-pointer hover:text-accent-200 w-fit"
                  >
                    {title}
                  </li>
                )
              )}
              {/* navigate to category */}
              <button
                onClick={() =>
                  navigate(
                    `/EcoVibe/Explore-Products/category=${supportedCategories[
                      subMenu
                    ].title.toLocaleLowerCase()}`
                  )
                }
                className="px-4 py-2 bg-primary-400 hover:bg-primary-600 transition-all text-white text-lg rounded-md justify-self-end"
              >
                See More ...
              </button>
            </ul>
            {/* product type collections */}
            <ul className="h-full w-1/3 flex flex-col gap-y-2 justify-evenly">
              <h4 className="text-2xl font-bold">Trend's</h4>
              {supportedCategories[subMenu].collections.map(
                ({ title }, index) =>
                  index < 4 && (
                    <li
                      onClick={() => {
                        navigate(
                          `/EcoVibe/Explore-Products/collections=${title.toLocaleLowerCase()}`
                        );
                      }}
                      key={index}
                      className="text-lg cursor-pointer hover:text-accent-200 w-fit"
                    >
                      {title}
                    </li>
                  )
              )}
              <button
                onClick={() => navigate("/EcoVibe/Explore-Products/")}
                className="px-4 py-1.5 transition-all border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white text-lg rounded-md justify-self-end"
              >
                Explore
              </button>
            </ul>
            {/* list thumbnail */}
            <div className="w-1/3 h-5/6 relative">
              <div className="absolute inset-0 rounded-md bg-primary-300/60 flex flex-col items-center justify-center gap-y-6">
                <h6 className="font-bold text-center text-white">
                  {/* its just index of supported categories :) */}
                  <span className="text-5xl">{subMenu + 1}0%</span>
                  <br />
                  <span className="text-2xl">Discount !</span>
                </h6>
              </div>
              {/* main pic */}
              <img
                src={supportedCategories[subMenu].bannerUrl}
                alt="sub menu banner"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sub links */}
      <div className="flex items-center justify-center gap-x-3 text-lg">
        {links.map(({ to, label }, i) => (
          <Link
            key={i}
            to={to}
            className="hover:text-primary-400 transition-all"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
