"use client";
import React from "react";

import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  ComposedChart,
  Area,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Bar,
  Line,
  Radar,
  Pie,
} from "recharts";

// Exemple de données enrichies
const COLORS = {
  primary: "#8884d8",
  secondary: "#82ca9d",
  danger: "#FF6347",
  warning: "#ffc658",
  info: "#F56565",
};

const dataAbsences = [
  { name: "Professeur A", absences: 10, experience: 5 },
  { name: "Professeur B", absences: 5, experience: 10 },
  { name: "Professeur C", absences: 8, experience: 7 },
];

const dataSatisfaction = [
  { name: "Professeur A", satisfaction: 85, feedback: "Excellent" },
  { name: "Professeur B", satisfaction: 90, feedback: "Très Bon" },
  { name: "Professeur C", satisfaction: 70, feedback: "Moyen" },
];

const dataSkills = [
  { skill: "Mathématiques", value: 70, detail: "Expert" },
  { skill: "Sciences", value: 80, detail: "Avancé" },
  { skill: "Histoire", value: 60, detail: "Intermédiaire" },
  { skill: "Langues", value: 75, detail: "Avancé" },
  { skill: "Arts", value: 50, detail: "Débutant" },
];

const rotationRate = [
  { year: 2020, value: 5, detail: "5% de rotation" },
  { year: 2021, value: 3, detail: "3% de rotation" },
  { year: 2022, value: 4, detail: "4% de rotation" },
  { year: 2023, value: 2, detail: "2% de rotation" },
  { year: 2024, value: 1, detail: "1% de rotation" },
];

// Composant principal
const DashboardProfesseur = () => {
  return (
    <div className="p-6 grid grid-cols-2 gap-6 text-sm">
      {/* Graphique à barres des absences */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Absences par Professeur</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dataAbsences}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="absences" fill="#F56565" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique à barres de satisfaction */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Satisfaction des Professeurs</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={dataSatisfaction}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="satisfaction" fill="#38B2AC" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique en radar pour les compétences */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Compétences des Professeurs</h2>
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius={90} data={dataSkills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar
              name="Compétences"
              dataKey="value"
              stroke="#3182CE"
              fill="#3182CE"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique linéaire du taux de rotation */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Taux de Rotation Annuel</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={rotationRate}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip
              formatter={(value, name) => {
                const item = rotationRate.find((item) => item.year === name);
                return item
                  ? [`${value}% - ${item.detail}`, "Détails"]
                  : [value, "Détails"];
              }}
            />
            <Line type="monotone" dataKey="value" stroke="#3182CE" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique en aire pour les absences sur plusieurs années */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Absences Annuelles</h2>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={dataAbsences}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="absences"
              fill="#BEE3F8"
              stroke="#63B3ED"
            />
            <Bar dataKey="absences" fill="#F56565" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique en secteurs pour la répartition des compétences */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Répartition des Compétences</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={dataSkills}
              dataKey="value"
              nameKey="skill"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {dataSkills.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique linéaire pour la satisfaction au fil du temps */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Satisfaction au Fil du Temps</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dataSatisfaction}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="satisfaction" stroke="#F6AD55" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique à barres combinées */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Statistiques Combinées</h2>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={dataSatisfaction}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="satisfaction" fill="#B79F00" />
            <Line type="monotone" dataKey="satisfaction" stroke="#D53F8C" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique à barres empilées */}
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Statistiques des Professeurs</h2>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={dataAbsences}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="absences" stackId="a" fill="#8884d8" />
            <Bar dataKey="experience" stackId="a" fill="#F56565" />
            <Bar dataKey="experience" stackId="a" fill="#F56565" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Ajouter des détails statistiques supplémentaires */}
      <div className="col-span-2 border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-lg font-bold mb-3">Statistiques Détails</h2>
        <ul className="list-disc pl-5">
          <li>Nombre total de professeurs : {dataAbsences.length}</li>
          <li>
            Pourcentage moyen d'absences :{" "}
            {(
              (dataAbsences.reduce((sum, item) => sum + item.absences, 0) /
                (dataAbsences.length * 10)) *
              100
            ).toFixed(2)}
            %
          </li>
          <li>
            Note moyenne de satisfaction :{" "}
            {(
              dataSatisfaction.reduce(
                (sum, item) => sum + item.satisfaction,
                0
              ) / dataSatisfaction.length
            ).toFixed(2)}
          </li>
          <li>
            Compétences les plus élevées :{" "}
            {
              dataSkills.reduce((prev, curr) =>
                prev.value > curr.value ? prev : curr
              ).skill
            }
          </li>
          <li>
            Taux de rotation en baisse de{" "}
            {rotationRate[rotationRate.length - 1].value}% par rapport à l'année
            précédente.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardProfesseur;
