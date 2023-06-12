import React, { useEffect, useRef, useState } from "react";
import About from "../about";
import FirstSection from "../home/firstSection";
import VectoreImage from "../../assets/images/logo.gif";
import IconDesign from "../../assets/icons/icon.png";
import CoffeImage from "../../assets/images/coffe-new.png";
import CoffeImageMobile from "../../assets/images/coffe-mobile.png";
import CoffeImage1 from "../../assets/images/coffe1.jpg";
import CoffeImage2 from "../../assets/images/coffe2.jpg";
import TeaxsImage from "../../assets/images/teaxs.png";
import FarmerImage from "../../assets/images/a-7.png";
import Slider from "react-slick";
import Icon from "../../assets/icons/icon.png";
import SecSection from "../home/secSection";
import "./newpage.scss";
import ContactSection from "../home/contactSection";
import SmoothScroll from "../../components/smoothscroll";
import { useTranslation } from "react-i18next";
export default function Newpage() {
  const { t } = useTranslation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const mineref = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide1Index, setSlide1Index] = useState(0);
  const [savedList, setSavedList] = useState(false);
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlide1Index(newIndex);
    },
  };

  const [openModal, setOpenModal] = useState(true);
  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (

      <div className="right-side-arrow-about-us" onClick={onClick}>
        <img src={IconDesign} alt="IconDesign" />
      </div>

    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (

      <div className="left-side-arrow-about-us" onClick={onClick}>
        <img src={IconDesign} alt="IconDesign" />
      </div>

    );
  }

  const nextSection = (currentPage) => {
    let navDots = document.getElementsByClassName("nav-dot");
    navDots = Array.prototype.slice.call(navDots);
    navDots[Number(currentPage) - 1]?.classList.remove("dot-active");
    navDots[Number(currentPage)]?.classList.add("dot-active");
    let pages = document.getElementById("all-pages");
    let Top = -document.documentElement.clientHeight * Number(currentPage);
    Top = Number(currentPage) === 10 ? Top + 969 : Top;
    pages.style.top = Top + "px";
  };

  return (
    <div>
      <div className="fullscreen-container" id="fullscreen">
        <div className="nav-dot-container">
          <p className="nav-dot dot-active" id="nav-dot-1" data-screen="main-screen"><span></span></p>
          <p className="nav-dot" id="nav-dot-2" data-screen="about-us"><span></span></p>
          <p className="nav-dot" id="nav-dot-3" data-screen="all-services"><span></span></p>
          <p className="nav-dot" id="nav-dot-4" data-screen="all-partners"><span></span></p>
          <p className="nav-dot" id="nav-dot-5" data-screen="all-contact"><span></span></p>
        </div>
        <div className="section-two-mail open-mail-box">
          <div className="open-main-box">
            <p>{t('open_mail')} ?</p>
            <button className="open-box-btn">{t('cancel')}</button>
            <button className="open-box-btn">{t('open')}</button>
          </div>
        </div>
        <div id="all-pages">
          <section className="page" id="main-screen">
            <div className="text-container">
              <div id="home">
                <div className="fullscreen-first" >
                  <div className="slide open-mail-box" id="fullscreen-first">
                    <div className="open-main-box">
                      <p>{t('open_mail')} ?</p>
                      <button className="open-box-btn">{t('cancel')}</button>
                      <button className="open-box-btn">{t('open')}</button>
                    </div>
                  </div>
                  <div className="slide secsection-banner-logo" id="fullscreen-second">
                    <FirstSection setOpenModal={setOpenModal} />

                  </div>
                  <div className="slide secsection-banner secsection-banner-one" id="fullscreen-second-two">
                    <SecSection />
                  </div>

                  <div className="slide secsection-banner secsection-banner-two" id="fullscreen-third">
                    <div className="sec-section-relative-div">
                      <div className="secsection-banner-image" id="secsection-bg-two">
                        <div className="sec-image-header-relative"></div>
                      </div>
                      <div className="dot-image-style-one"></div>
                    </div>
                  </div>

                  <div className="slide secsection-banner secsection-banner-three" id="fullscreen-fourth">
                    <div className="sec-section-relative-div">
                      <div className="secsection-banner-image" id="secsection-bg-fourth">
                        <div className="sec-image-header-relative"></div>
                      </div>
                      <div className="dot-image-style-two" id="secsection-banner-tow"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="bottom-arrow-alignment-abc" data-screen="about-us"
                >
                  <img src={Icon} alt="Icon" />
                </div>
              </div>
            </div>
          </section>
          <section className="page" id="about-us">
            <div className="text-container">
              <About />
              <div
                className="bottom-arrow-alignment-abc" data-screen="all-services"
              >
                <img src={Icon} alt="Icon" />
              </div>
            </div>
          </section>
          <section className="page" id="all-services">
            <div className="text-container">
              <div className="main-service-section-alignment">
                <Slider {...settings1}>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style mobile-hidden">
                          <img src={CoffeImage} alt="CoffeImage" />
                        </div>
                        <div className="image-style-mobile desktop-header-hidden">
                          <img src={CoffeImageMobile} alt="CoffeImageMobile" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('services')}</h2>
                            <p>
                              {t('services_first_para')}
                            </p>
                            <p>
                              {t('services_second_para')}
                            </p>
                            <p>
                              {t('services_third_para')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('gene_sequencing')}</h2>
                            <p>
                              {t("gene_sequencing_para")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('inline_breeding')}</h2>
                            <p>{t('iniline_breeding_para')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('environmental_testing')}</h2>
                            <p>
                              {t('environmental_testing_para')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('plant_psychology')}</h2>
                            <p>
                              {t('plant_psychology_para')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('speciality')}</h2>
                            <p>
                              {t('speciality_para')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>{t('strategic_partnershipt')}</h2>
                            <p>
                              {t('strategic_partnershipt_data')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div
                  className="bottom-arrow-alignment-abc" data-screen="all-partners"
                >
                  <img src={Icon} alt="Icon" />
                </div>
              </div>
            </div>
          </section>

          <section className="page partners-section" id="all-partners">
            <div className="text-container">
              <div className="partner-all-section-content-alignment">
                <div className="container-xl">
                  <h4>{t('partners')}</h4>
                  <p>
                    {t('partner_subtitle')}
                  </p>
                  <div className="all-partners-content-icon-alignment">
                    <a href="#" className="order-1"></a>
                    <a href="#" className="order-2"></a>
                    <a href="#" className="order-3"></a>
                    <a href="https://www.tamu.edu/" className="order-class order-4">
                      <img src={TeaxsImage} alt="TeaxsImage" />
                    </a>
                    <a href="#" className="order-5"></a>
                    <a href="#" className="order-6"></a>
                    <a href="#" className="order-7"></a>
                  </div>
                </div>
              </div>
              <div
                className="bottom-arrow-alignment-abc" data-screen="all-contact"
              >
                <img src={Icon} alt="Icon" />
              </div>
            </div>
          </section>
          <section className="page" id="all-contact">
            <div className="text-container">
              <ContactSection />
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
