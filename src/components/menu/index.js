import React from "react";
//import { NavLink } from "react-router-dom";
import "./menu.scss";
import { useTranslation } from "react-i18next";
export default function MenuBar() {
  const { t } = useTranslation()
  const nextSection = (currentPage) => {
    let navDots = document.getElementsByClassName("nav-dot");
    navDots = Array.prototype.slice.call(navDots);
    navDots[Number(currentPage) - 1]?.classList.remove("dot-active1");
    navDots[Number(currentPage)]?.classList.add("dot-active1");
    let pages = document.getElementById("all-pages");
    let Top = -document.documentElement.clientHeight * Number(currentPage);
    Top = Number(currentPage) === 10 ? Top + 969 : Top;
    pages.style.top = Top + "px";
  };
  return (
    <>
      <div className="menu-bar-alignment">
        <div className="menubar-container">
          <div className="menu-bar-alignment-for-section">
            <div className="left-side-content">
              <a href="/" onClick={() => nextSection(0)}>{t('home')}</a>
              <span>|</span>
              <a href="/" className="wc-about-link nav-dot" data-screen="about-us">{t('about')}</a>
              <span>|</span>
              <a href="javascript:;" className="say-helloy" onClick={() => nextSection(0)}>{t('say_hello')}</a>
            </div>
            <div className="right-side-content">
              <p>2023 RARE EARTH GENOMICS ™</p>
            </div>
          </div>
        </div>
        <div className="mobile-view-footer-content-alignment">
          <p>
            2023 rare earth genomics <sup>tm</sup>
          </p>
        </div>
      </div>
    </>
  );
}
