"use client";

import { useState, useEffect } from 'react';

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
      <nav>
        <div className="title">Portfolio site</div>
        <div>
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
        </div>
      </nav>
      <section>
        <div className="content">
          <h1>KIYONA TRACY's <br/>portfolio site</h1>
          <h3>Profile</h3>
          <p>born in 1995</p>
          <p>Web fullstack Developer from Japan</p>
          <button className="primary-btn">Contact</button>
        </div>
      </section>
    </div>
  </div>
}
