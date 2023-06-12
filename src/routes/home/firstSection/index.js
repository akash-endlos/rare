import React, { useState } from "react";
import "./firstSection.scss";
import LogoGif from "../../../assets/images/logo.gif";
import Icon from "../../../assets/icons/icon.png";
import MenuBar from "../../../components/menu";
import OnePageHeader from "../../../components/onePageHeader";
import { useTranslation } from "react-i18next";
export default function FirstSection({ setOpenModal }) {
  const {t} = useTranslation()
  return (
    <div>
      <div className="first-section-banner">
        <div className="first-section-container-fluid">
          <div className="first-section-body-alignment">
            <div className="grid">
              <div className="grid-items" id="left-text">
                <p>{t('first_page_title')} </p>
              </div>
              <div className="grid-items" id="center-logo">
                <div className="gif-logo">
                  <img src={LogoGif} alt="LogoGif" />
                </div>
              </div>
              <div className="grid-items" id="right-text">
                <p>{t('first_page_second_title')}</p>
              </div>
              <div className="mobile-text grid-items" id="center-logo1">
                Heal the soil Heal the Soul
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
