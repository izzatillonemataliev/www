import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BiLogoRedux } from "react-icons/bi";
import { signOut } from "firebase/auth"; // Firebase'dan import qilish kerak
import { useGlobalContext } from "../hooks/useGlobalContext";


function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Header() {
  const { total, user } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());

  const handleTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Chiqish muvaffaqiyatli amalga oshirildi.
      })
      .catch((error) => {
        // Xato yuz berdi.
      });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link to="/">
            <BiLogoRedux className="w-100" />
          </Link>
        </div>
        <nav className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </nav>

        <div className="navbar-end flex gap-10 items-center">
          <div className="indicator">
            <span className="indicator-item badge badge-md badge-secondary">
              {total}
            </span>
            <Link to="/korzinka">
              <FaCartShopping className="w-7 h-7" />
            </Link>
          </div>

          <label className="swap swap-rotate">
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme === "dracula"}
              readOnly
            />
            <IoSunnySharp className="swap-on fill-current w-10 h-10" />
            <IoMoonSharp className="swap-off fill-current w-10 h-10" />
          </label>
          <div className="flex gap-4 items-center">
            <p>{user.displayName}</p>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="Foydalanuvchi rasmi" />
              </div>
            </div>
          </div>
          <button onClick={logout} className="btn btn-primary">
            Chiqish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
