import React, { FC } from "react";
import { ICountry } from "../../models/National.types";
import style from "./RenderResult.module.css";

type IRenderResultProps = {
  message: string;
  nationalities: ICountry[];
};

const RenderResult: FC<IRenderResultProps> = ({ message, nationalities }) => {
  return (
    <div className={style.container}>
      <div className={style.message}>{message}</div>
      <div className={style.results}>
        {Array.isArray(nationalities) &&
          nationalities.map((nationality: ICountry) => {
            const flagUrl = `https://flagcdn.com/w160/${nationality.country_id.toLowerCase()}.jpg`;
            const altText = `${nationality.country_id} flag`;
            return (
              <div key={nationality.country_id}>
                <h3>
                  {nationality.country_id} -{" "}
                  {(nationality.probability * 100).toFixed(2)}%
                </h3>
                <div className={style.imageContent}>
                <img
                  src={flagUrl}
                  alt={altText}
                  style={{ border: "1px solid black" }}
                />
                </div>
             
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RenderResult;
