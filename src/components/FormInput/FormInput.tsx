import React, { useState } from "react";
import fetchNationalities from "../../services/fetchNationalities";
import { ICountry } from "../../models/National.types";
import RenderResult from "../RenderResult/RenderResult";
import style from "./FormInput.module.css";

const FormInput = () => {
  const [nationalities, setNationalities] = useState<ICountry[]>([]);
  const [message, setMessage] = useState<string>("");
  const [personName, setPersonName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (personName === "") {
      return;
    }
    e.preventDefault();
    await fetchNationalities(setNationalities, setMessage, personName);
  };
  return (
    <div className={style.container}>
      <header>
        <div className="title-form">
          <h2>Check percentage of person's name based on countries</h2>
          <div style={{ marginBottom: "20px" }}>
            <form name="nationalities-form" onSubmit={handleSubmit}>
              <input
                name="personName"
                type="text"
                onChange={(e) => setPersonName(e.target.value)}
                value={personName}
                placeholder="Enter a person's name"
              />
              <button type="submit">Get Nationalities</button>
            </form>
          </div>
        </div>
        <div className="results">
          <RenderResult {...{ message, nationalities }} />
        </div>
      </header>
    </div>
  );
};

export default FormInput;
