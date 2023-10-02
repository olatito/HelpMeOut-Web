import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const toggleMenu = () => {
    setToggleSideBar(!toggleSideBar);
  };

  function signUpHandler() {
    navigate("/Auth");
  }
  return (
    <header className="lg:px-[100px] py-[12px] shadow sticky top-0 bg-white">
      <nav className="flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" />
        <div className="flex gap-[39px]">
          <li className="font-work font-medium" onClick={toggleMenu} id="features">
            <a href="/#features" >Features</a>
          </li>
          <li className="font-work font-medium" onClick={toggleMenu} id="howItWorks">
            <a href="#howItWorks">How It Works</a>
          </li>
        </div>
        <button
          className="font-sora font-semibold text-[18px] text-primary-main"
          onClick={signUpHandler}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;
