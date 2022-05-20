import React from "react";
import print from "../../../../../icons/print.png";

import "./index.scss";

const MainInfo = () => (
  <div className="main-info">
    <img
      title="Print to PDF"
      onClick={() => window.print()}
      className="main-info__print"
      alt="item"
      src={print}
    />
    <h2 className="main-info__name">
      <br />
      Vladyslav
    </h2>
    <div className="main-info__status">React developer</div>
    <div className="main-info__address">Kharkiv, Ukraine</div>
  </div>
);

export default MainInfo;
