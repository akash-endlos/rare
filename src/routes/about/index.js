import React, { useState } from "react";
import OnePageHeader from "../../components/onePageHeader";
import "./about.scss";
import Slider from "react-slick";
import MenuBar from "../../components/menu";
import VectoreImage from "../../assets/images/about-image.png";
import IconDesign from "../../assets/icons/icon.png";
import CoffeImage from "../../assets/images/coffe.png";
import FarmerImage from "../../assets/images/a-7.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const [hiddenSection, setHiddenSection] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide1Index, setSlide1Index] = useState(0);
  const { t } = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlideIndex(newIndex);
    },
  };
  console.log("slideIndex", slideIndex);
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlide1Index(newIndex);
    },
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndex === 0 && (
        <div className="right-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndex === 1 && (
        <div className="left-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      slide1Index === 0 && (
        <div className="right-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      slide1Index === 1 && (
        <div className="left-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  return (
    <div>
      <div className="about-us-hero-banner">
        <Slider {...settings}>
          <div className="container-xl">
            <div className="about-us-first-section-image-with-text">
              <div className="grid">
                <div className="grid-items">
                  <div className="image-style">
                    <img src={VectoreImage} alt="VectoreImage" />
                  </div>
                </div>
                <div className="grid-items">
                  <h1>{t('about_us')}</h1>
                  <p>
                    {t('about_us_first_para')}
                  </p>
                  <p>
                    {t('about_us_second_para')}
                  </p>
                  <p>
                    {t('about_us_third_para')}
                  </p>
                  <p>
                    {t('about_us_fourth_para')}
                  </p>
                  <p>
                    {t('about_us_fifth_para')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-xl">
            <div className="about-only-three-col-text-content">
              <div>
                <div className="page-title">
                  <h1>lorem inpsum</h1>
                </div>
                <div>
                  <div className="text-grid">
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </Slider>
      </div>
      {/* <div className="main-service-section-alignment">
        <Slider {...settings1}>
          <div className="main-service-banner">
            <div className="service-flex">
              <div className="service-flex-items">
                <div className="image-style">
                  <img src={CoffeImage} alt="CoffeImage" />
                </div>
              </div>
              <div className="service-flex-items">
                <div>
                  <div className="service-text-style-for-page">
                    <h2>services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corporis, autem pariatur, non reiciendis culpa atque,
                      reprehenderit officiis adipisci excepturi saepe modi vel
                      natus! Aut alias sint consectetur quaerat laborum quae!
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                    <p>
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
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
                  <img src={CoffeImage} alt="CoffeImage" />
                </div>
              </div>
              <div className="service-flex-items">
                <div>
                  <div className="service-text-style-for-page">
                    <h2>lorem ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corporis, autem pariatur, non reiciendis culpa atque,
                      reprehenderit officiis adipisci excepturi saepe modi vel
                      natus! Aut alias sint consectetur quaerat laborum quae!
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                    <p>
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="main-service-section-alignment">
        <div className="main-service-banner">
          <div className="service-flex">
            <div className="service-flex-items">
              <div className="image-style">
                <img src={FarmerImage} alt="FarmerImage" />
              </div>
            </div>
            <div className="service-flex-items">
              <div>
                <div className="service-text-style-for-page">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, autem pariatur, non reiciendis culpa atque,
                    reprehenderit officiis adipisci excepturi saepe modi vel
                    natus! Aut alias sint consectetur quaerat laborum quae!
                    Eligendi illum quasi consequuntur, iusto natus atque fugit
                    qui? Similique quibusdam quos repellendus possimus obcaecati
                    voluptatem quia perferendis ex necessitatibus
                  </p>
                  <p>
                    Eligendi illum quasi consequuntur, iusto natus atque fugit
                    qui? Similique quibusdam quos repellendus possimus obcaecati
                    voluptatem quia perferendis ex necessitatibus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
