import React from "react";
import { ICountry } from "../models/National.types";

const fetchNationalities = async (
  setNationalities: React.Dispatch<React.SetStateAction<ICountry[]>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  personName: string
) => {
  try {
    const data = await (
      await fetch(`https://api.nationalize.io/?name=${personName}`)
    ).json();
    const hasCountryData = data.country && data.country.length;
    const nationalities = hasCountryData ? data.country : [];
    setNationalities(nationalities);

    const foundInfo = hasCountryData
      ? `${data.country.length  === 1 ? (data.country.length + " guess found"): (data.country.length + " guesses found")}`
      : "No nationality match found";
    setMessage(foundInfo);
  } catch (err) {
    if (err instanceof Error) console.log(`err: ${err.message}`);
    setNationalities([]);
    setMessage("Could not fetch nationalities, try again later.");
  }
};

export default fetchNationalities;
