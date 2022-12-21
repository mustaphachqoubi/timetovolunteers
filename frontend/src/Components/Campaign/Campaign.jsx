import React from "react";
import "./style.css";
import { Campaigns } from "../../dummy";

const Campaign = () => {
  return (
    <>
      {Campaigns.map((c) => (
        <div className="Campaign" key={c.id}>
        <div className="Campaign_image_container">
          <img src={c.image.url} alt="" className="Campaign_image" />
        </div>
        <div className="Campaign_infos">
          <h1 className="Campaign_title">
            {c.donation_title}
          </h1>
          <h4 className="Campaign_creator">{c.donation_creator.name}</h4>
          <div className="Campaign_loading">
            <div className="Campaign_loading_mover"></div>
          </div>
          <div className="Campaign_target">
            <h5 className="Campaign_target_price">Taget: {c.donation_target.formatted_with_dollars}</h5>
            <h5 className="Campaign_target_percent">68%</h5>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Campaign;
