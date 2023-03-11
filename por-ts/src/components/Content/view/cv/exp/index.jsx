import React from "react";

// import './index.scss';

const Exp = () => (
  <div className="exp">
    <div className="exp__experience">
      <h3 className="exp__pe-title">PROFESSIONAL EXPERIENCE</h3>
      <p className="exp__accent-gray" />
      <p className="exp__pe-description">
        A couple of years of experience in freelance. Two years of commercial
        experience as a react developer in two IT companys
        <br />
        React/Redux/KonvaJS/TypeScript
      </p>
    </div>
    <h3 className="exp__pe-title exp__pe-title-1">PROFESSIONAL SKILLSET</h3>
    <p className="exp__accent-gray exp__accent-gray2" />
    <div className="exp__skillset">
      <div className="exp__item-wrap">
        <span className="exp__item">HTML:</span>
        <p className="exp__skill">
          HTML5 Pixel Perfect development, Bootstrap 4
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">CSS:</span>
        <p className="exp__skill">
          Responsive web design, SASS, BEM, CSS transitions, flexBox, grid,
          cross-browser compatibility knowledge, semantic UI
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">JavaScript:</span>
        <p className="exp__skill">React, Konva, D3.js, TS</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap exp__item-wrap6">
        <span className="exp__item">
          PSD to
          <br /> HTML:
        </span>
        <p className="exp__skill">Photoshop, Figma</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap exp__item-wrap7">
        <span className="exp__item">
          Version
          <br /> control:
        </span>
        <p className="exp__skill">GitHub, GitLab</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">CMS:</span>
        <p className="exp__skill">WordPress</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">Backend:</span>
        <p className="exp__skill">
          NodeJs/ Express/ JWT access/ refresh/ Bcrypt/ Telegram bot{" "}
        </p>
        <hr className="exp__hr" />
      </div>
    </div>
  </div>
);

export default Exp;
