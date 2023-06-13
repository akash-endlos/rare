import React, { useState } from "react";
import MenuBar from "../../../components/menu";
import OnePageHeader from "../../../components/onePageHeader";
import "./contactSection.scss";
import FacebookIcon from "../../../assets/images/fb.png";
import SecImage from "../../../assets/images/a-7.png";
import InstaIcon from "../../../assets/images/insta.png";
import LinkdinIcon from "../../../assets/images/linkdin.png";
import axios from 'axios';

import { useTranslation } from "react-i18next";
export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:5000/send-email', {
        to: email,
        subject: 'You Are Subscribe The Channel',
        text: 'Thank you For Subscribe',
      });

      // console.log('Email sent successfully!', response.data);
      setEmail('')
      setLoading(false);
      setError(null);
    } catch (error) {
      // console.error('Error sending email:', error.response.data);

      setLoading(false);
      setError('Failed to send email.');
    }
  };


  const { t } = useTranslation()
  return (
    <div>
      <div className="contact-section-banner">
        <div className="main-contact-banner">
          <div className="service-flex">
            <div className="service-flex-items">
              <div className="image-style">
                <img src={SecImage} alt="SecImage" />
              </div>
            </div>
            <div className="service-flex-items">
              <div>
                <div className="service-text-style-for-page">
                  <div className="first-text">
                    <h2>{t('contact')}</h2>
                    <p>
                      {t('contact_description')}
                    </p>
                  </div>
                  <div className="mobile-email-text">
                    <a href="mailto:howdy@rareearth.com?subject = Feedback&body = Message">
                      howdy@rareearth.com
                    </a>
                  </div>
                  <h2 className="mobile-text">{t('connect')}</h2>
                  <div className="social-media">
                    <a target="blank" href="https://www.instagram.com/rareearthgenomics/"><img src={InstaIcon} alt="InstaIcon" /></a>

                  </div>
                  <div className="subscribe-text">
                    <p>{t('subscribe')}</p>
                    <div className="mail-grid">
                      <div className="mail-grid-items">
                        <input type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} placeholder={t('your_email')} />
                      </div>
                      <div className="mail-grid-items">
                        <button disabled={loading} onClick={handleEmailSubmit}>{ t('enter')}</button>
                      </div>
                      {error && <p>{error}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
