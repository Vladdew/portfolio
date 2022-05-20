import React from "react";

import square from "../../../../../img/square.jpg";
import cwars from "../../../../../img/cwars.jpg";
import kyu from "../../../../../img/kyu.jpg";

// import './index.scss';
let count = 0;
const ProfileTitle = () => (
  <div className="profile-title">
    Professional
    <br />
    <img className="profile-title__square" alt="item" src={square} /> Profile
    <div
      onClick={() => {
        if (typeof window !== "undefined") {
          if (window.innerWidth < 633) {
            if (count) {
              window.location.href = "https://www.codewars.com/users/Vlad04ek";
            }
          } else {
            window.location.href = "https://www.codewars.com/users/Vlad04ek";
          }

          count++;
        }
      }}
      className="profile-title__cwars"
    >
      <p className="profile-title__cwars-t1">codewars</p>
      <p className="profile-title__cwars-t2">
        more than 100 solved
        <br /> problems
      </p>
      <img
        className="profile-title__cwars-img profile-title__cwars-img-kyu"
        alt="item"
        src={kyu}
      />
      <img
        className="profile-title__cwars-img profile-title__cwars-img-cwars"
        alt="item"
        src={cwars}
      />
    </div>
  </div>
);

export default ProfileTitle;
