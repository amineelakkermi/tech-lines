import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../constants/data";
import { useTranslation } from "react-i18next";
import { techLine } from "../assets1";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState("bg-slate-100");
  const [shadow, setShadow] = useState("");
  const [activeLink, setActiveLink] = useState("/home");

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor("bg-white");
        setShadow("shadow-sm");
      } else {
        setBgColor("bg-gray-100");
        setShadow("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mise à jour de l'activeLink en fonction de l'URL actuelle
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`w-full mx-auto z-[999] md:py-4 py-2 md:px-16 px-6 flex items-center justify-between navbar ${bgColor} fixed top-0 left-0 right-0 ${shadow} transition-all z-[999]`}
    >
      <Link
        to="/home"
        onClick={() => {
          scrollToTop();
          setActiveLink("/home");
        }}
      >
        <img
          src={techLine}
          alt="logo"
          className="max-w-[250px] w-auto md:h-[60px] h-[40px] object-cover"
        />
      </Link>

      <ul className="list-none md:flex hidden justify-center items-center flex-1 gap-12">
        {navItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <Link
              className={`nav-list-li cursor-pointer ${
                currentLanguage === "ar" ? "text-[20px]" : "text-[18px]"
              } ${
                activeLink === item.url ? "text-blue1" : "text-black"
              } font-medium duration-300 hover:text-blue1`}
              to={item.url}
              onClick={() => {
                setActiveLink(item.url);
                scrollToTop();
                setToggle(false);
              }}
            >
              {currentLanguage === "ar" ? item.titleAr : item.titleEn}
            </Link>
          </li>
        ))}
      </ul>

      <LanguageSwitcher />

      <div className="md:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <FaTimes
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <FaBars
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <div className="z-20 p-6 absolute top-20 mt-4 left-1/2 -translate-x-1/2 w-[90%] rounded-sm bg-gray-100 flex flex-col gap-8 justify-center items-center">
            <ul className="list-none flex flex-col justify-center items-center gap-8">
              {navItems.map((item, index) => (
                <li key={index} className="flex justify-center items-center">
                  <Link
                    className={`nav-list-li cursor-pointer ${
                      activeLink === item.url ? "text-blue-500" : "text-black"
                    } duration-300 hover:text-blue1`}
                    to={item.url}
                    onClick={() => {
                      setActiveLink(item.url);
                      scrollToTop();
                      setToggle(false);
                    }}
                  >
                    {currentLanguage === "ar" ? item.titleAr : item.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
