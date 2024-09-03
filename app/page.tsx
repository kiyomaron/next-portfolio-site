"use client";

import { useState, useEffect } from 'react';
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { BiRightArrow } from "react-icons/bi";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);
  const [currentMenu, setCurrentMenu] = useState<string | undefined>('home');

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(e.target.checked);
  };

  const handleMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    
    setCurrentMenu(e.target.id);
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

  const changeMenuArrow = () => {
    console.log('change here.');
    
  };

  useEffect(() => {
    changeThemeColor();
  }, [darkTheme]);

  useEffect(() => {
    changeMenuArrow();
  }, [currentMenu]);

  const getContent = () => {
    switch (currentMenu) {
      case 'profile':
        return (
          <div className="top-content">
            <h1 className="text-5xl pb-4">Profile</h1>
            <h3>Kiyona Tracy</h3>
            <p>Fullstack Web Developer from Japan</p>
          </div>
        )
      case 'home':
      default:
        return (
          <div className="top-content">
            <h1 className="text-5xl pb-4">Hello,<br/>I'm KIYO!</h1>
            <p>Fullstack Web Developer from Japan</p>
            <button className="primary-btn">Contact</button>
          </div>
        );
    }
  };

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
            {getContent()}
            <ul className="menu">
              <li id="home" onClick={handleMenu}><BiRightArrow className="menu-arrow icon-s mr-2"/>Home</li>
              <li id="profile" onClick={handleMenu}><BiRightArrow className="menu-arrow icon-s mr-2"/>Profile</li>
              <li><BiRightArrow className="menu-arrow icon-s mr-2"/>Skills</li>
              <li><BiRightArrow className="menu-arrow icon-s mr-2"/>Works</li>
              <li><BiRightArrow className="menu-arrow icon-s mr-2"/>Contact</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
}
