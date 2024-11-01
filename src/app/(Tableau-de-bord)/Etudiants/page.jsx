import React from "react";
import {
  CustomCalendar,
  Annonces,
  MyCalendar,
  CountChart,
} from "../../../components/Comptes";
const Etudiants = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1>Programme (1ere Annee filiere G.Electrique)</h1>
          {/* <CountChart /> */}
          <MyCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <CustomCalendar />
        <Annonces />
      </div>
    </div>
  );
};

export default Etudiants;
