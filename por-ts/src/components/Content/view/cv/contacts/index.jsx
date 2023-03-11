import React, { useState } from "react";
import phone from "../../../../../icons/phone.png";
import done from "../../../../../icons/done.png";
import email from "../../../../../icons/email.png";
import telegram from "../../../../../icons/telegram.png";
import home from "../../../../../icons/home.png";

import "./index.scss";

const Contacts = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="contacts-wrap">
      <h3>Contact</h3>
      <p className="contacts-wrap__accent-yellow" />
      <ul className="contacts-wrap__contacts">
        <li className="contacts-wrap__contactme">
          <a className="contacts-wrap__call-link" href="tel:+380991177577">
            <div className="contacts-wrap__contact-title">
              <span className="contacts-wrap__contact-styles">Phone</span>
              <br />
              +38(099)11-77-5-77
            </div>
            <div className="contacts-wrap__icon-border contacts-wrap__icon-border1">
              <img src={phone} alt="contact" />
            </div>
          </a>
        </li>
        <li
          onClick={() => {
            setFlag(true);
            setTimeout(() => {
              setFlag(false);
            }, 3000);
            navigator.clipboard.writeText("vladyslav223@gmail.com");
          }}
          title="Copy to clipboard"
          className={
            flag
              ? "contacts-wrap__contactme copied"
              : "contacts-wrap__contactme"
          }
        >
          {!flag ? (
            <div className="contacts-wrap__contact-title contacts-wrap__contact-title-email">
              <span className="contacts-wrap__contact-styles">Email</span>
              <br />
              vladyslav223 @gmail.com
            </div>
          ) : (
            <div className="contacts-wrap__contact-title contacts-wrap__contact-title-email-copied">
              Email copied!
            </div>
          )}
          <div className="contacts-wrap__icon-border contacts-wrap__icon-border2">
            <img src={flag ? done : email} alt="icon-copy-email" />
          </div>
        </li>
        <li className="contacts-wrap__contactme">
          <div className="contacts-wrap__contact-title">
            <a
              className="contacts-wrap__telegram-link"
              href="tg://resolve?domain=vladdew"
            >
              <span className="contacts-wrap__contact-styles">Telegram</span>
              <br />
              Or write here
            </a>
          </div>
          <div className="contacts-wrap__icon-border contacts-wrap__icon-border3">
            <a
              className="contacts-wrap__telegram-link"
              href="tg://resolve?domain=vladdew"
            >
              <img src={telegram} alt="contact" />
            </a>
          </div>
        </li>
        <li className="contacts-wrap__contactme">
          <a
            className="contacts-wrap__home-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/%D0%93%D0%BE%D1%81%D0%BB%D0%B0%D1%80/@51.9249204,10.3434856,11z/data=!3m1!4b1!4m6!3m5!1s0x47a5409a8340441b:0xa340eceac807c2b!8m2!3d51.9059531!4d10.4289963!16zL20vMDE0cV82"
          >
            <div className="contacts-wrap__contact-title">
              <span className="contacts-wrap__contact-styles">Address</span>
              <br />
              Goslar, Germany
            </div>
            <div className="contacts-wrap__icon-border contacts-wrap__icon-border4">
              <img src={home} alt="contact" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
