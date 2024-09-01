"use client";

import { useState, useEffect } from 'react';
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { BiRightArrow } from "react-icons/bi";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked);
  };
  
  const changeThemeColor = () => {
    if (darkTheme !== null) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");

      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  };

  useEffect(() => {
    changeThemeColor();
  }, [darkTheme]);

  return <div>
    <div className="container">
      <header>
        <div className="title">Portfolio site</div>
        <div className="theme-color-switch">
          <LuSunMedium />
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={darkTheme}
              />
              <span className="slider"></span>
            </label>
          </form>
          <LuMoon />
        </div>
      </header>
      <section>
        <div className="content">
          <div className="content-inner">
            <div className="top-content">
              <h1 className="text-5xl pb-4">Hello,<br/>I'm KIYONA!</h1>
              <p>Web fullstack Developer from Japan</p>
              <button className="primary-btn">Contact</button>
            </div>
            <ul className="menu">
              <li><BiRightArrow className="icon-s mr-2"/><a href="#">Home</a></li>
              <li><a href="./profile">Profile</a></li>
              <li>Skills</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
}
