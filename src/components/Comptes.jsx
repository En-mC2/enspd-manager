"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const informations = [
  {
    name: "Total",
    count: 402,
    fill: "white",
  },
  {
    name: "Filles",
    count: 92,
    fill: "#FAE27C",
  },
  {
    name: "Garcons",
    count: 310,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Etudiants</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={informations}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div
            className="w-5 h-5 rounded-full"
            style={{
              background: "#FAE27C",
            }}
          />
          <h1 className="font-bold">310</h1>
          <h2 className="text-xs text-gray-300">Femmes (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div
            className="w-5 h-5 rounded-full"
            style={{
              background: "#C3EBFA",
            }}
          />
          <h1 className="font-bold">92</h1>
          <h2 className="text-xs text-gray-300">Garcons (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;