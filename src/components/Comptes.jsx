"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"; // Custom styles
import Image from "next/image";
import { calendarEvents } from "@/lib/data";
import "moment/locale/fr";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import "./calendrier.css";
import {
  Sector,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Label,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  View,
  Views,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import your custom styles

moment.locale("fr");
const formattedEvents = calendarEvents.map((event) => ({
  ...event,
  start: moment(event.start)._d, // Convert to JS Date
  end: moment(event.end)._d, // Convert to JS Date
}));

const data = [
  {
    name: "Mon",
    present: 212,
    absent: 1,
  },
  {
    name: "Tue",
    present: 170,
    absent: 8,
  },
  {
    name: "Wed",
    present: 190,
    absent: 2,
  },
  {
    name: "Thu",
    present: 252,
    absent: 13,
  },
  {
    name: "Fri",
    present: 191,
    absent: 6,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Fiche de presence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

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

const datas = [
  // { month: "Jan", Math: 85, Science: 90, English: 78 },
  { month: "Feb", Math: 88, Science: 92, English: 80 },
  { month: "Mar", Math: 90, Science: 94, English: 75 },
  { month: "Apr", Math: 92, Science: 88, English: 82 },
  { month: "May", Math: 87, Science: 93, English: 79 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-md p-2">
        <h4 className="text-gray-800 font-bold">{`${payload[0].name} : ${payload[0].value}`}</h4>
      </div>
    );
  }
  return null;
};

const EnhancedLineChart = () => {
  return (
    <div className="bg-gradient-to-br from-[#F0E1F9] h-[450px] to-[#D5E1FF] rounded-xl shadow-lg p-4 transition-transform transform hover:scale-103">
      <h2 className="text-lg font-semibold text-center mb-4">
        Performances generales
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month">
            <Label value="Mois" position="bottom" offset={0} />
          </XAxis>
          <YAxis>
            <Label
              value="Scores"
              angle={-90}
              position="insideLeft"
              offset={10}
            />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Math"
            stroke="#A8DADC"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Science"
            stroke="#F1FA8C"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="English"
            stroke="#FFB6C1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Fiche de presence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="present"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="absent"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const lineData = [
  { month: "Jan", Math: 85, Science: 90 },
  { month: "Feb", Math: 78, Science: 92 },
  { month: "Mar", Math: 88, Science: 85 },
  { month: "Apr", Math: 92, Science: 94 },
  { month: "May", Math: 95, Science: 91 },
];

const barData = [
  { name: "Attendance", value: 75 },
  { name: "Participation", value: 80 },
  { name: "Assignments", value: 90 },
  { name: "Projects", value: 85 },
];

const pieData = [
  { name: "Analyse", value: 40 },
  { name: "Algebre lineaire", value: 30 },
  { name: "mecanique du point", value: 20 },
  { name: "optique", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip1 = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-2">
        <h4 className="text-gray-800 font-bold">{`${payload[0].name}: ${payload[0].value}`}</h4>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-[#e0f7fa] to-[#ffecb3] rounded-xl shadow-lg transition-transform transform hover:scale-102">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Dashboard de Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month">
            {/* <Label value="Mois" position="bottom" /> */}
          </XAxis>
          <YAxis>
            <Label value="Scores" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip content={<CustomTooltip1 />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Math"
            stroke="#42a5f5"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Science"
            stroke="#ffca28"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

      <h3 className="text-lg font-semibold mt-6">Engagement des Étudiants</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip1 />} />
          <Legend />
          <Bar dataKey="value" fill="#ff5722" />
        </BarChart>
      </ResponsiveContainer>

      <h3 className="text-lg font-semibold mt-6">Répartition des Notes</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events] = useState([
    { date: new Date(2024, 10, 1), title: "Event 1" },
    { date: new Date(2024, 10, 15), title: "Event 2" },
    { date: new Date(2024, 10, 20), title: "Event 3" },
  ]);

  const tileClassName = ({ date }) => {
    const event = events.find(
      (event) => event.date.toDateString() === date.toDateString()
    );
    return event ? "highlight" : null;
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Calendrier</h1>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        className="custom-calendar"
      />
      <div className="event-details">
        <h2>Events on {date.toDateString()}:</h2>
        <ul>
          {events
            .filter(
              (event) => event.date.toDateString() === date.toDateString()
            )
            .map((event, index) => (
              <li key={index} className="event-item">
                {event.title}
              </li>
            ))}
          {events.filter(
            (event) => event.date.toDateString() === date.toDateString()
          ).length === 0 && <li>No events</li>}
        </ul>
      </div>
    </div>
  );
};
const Annonces = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-content">
        <h1 className="text-xl font-semibold">Annonces</h1>
        {/* <span className="text-xs text-gray-400">Voir les annonces</span> */}
      </div>
      <div className="flex gap-4 mt-4 flex-col">
        <div className="rounded-md p-4 bg-[#EDF9FD]">
          <h2 className="font-medium">
            <span className="font-bold">Annonce 1:</span>
            Bonsoir. Juste pour vous annoncer que une reunion se tiendra demain
            a 13h30 dans le cadre du club informatique.
          </h2>
        </div>
        <div className="rounded-md p-4 bg-[#fff6dd]">
          <h2 className="font-medium">
            <span className="font-bold">Annonce 2:</span>
            Bonsoir. je tiens a signaler que il ya un rattrapge demain a 16h
          </h2>
        </div>
        <div className="rounded-md p-4 bg-[#f3fbe0]">
          <h2 className="font-medium">
            <span className="font-bold">Annonce 3:</span>
            Bonsoir a tous.. Demain, nous aurons une evaluation en mathematiques
          </h2>
        </div>
      </div>
    </div>
  );
};
// components/Calendar.js

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <BigCalendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)} // Set minimum time
      max={new Date(2025, 1, 0, 22, 0, 0)} // Set maximum time
    />
  );
};
const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};
const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div>
        <button className="px-2 rounded-sm bg-[#C3EBFA]">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};
const data3 = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];
const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data3}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-300">of 10 max LTS</p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

const FormModal = ({ table, type, data, id }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FAE27C]"
      : type === "update"
      ? "bg-[#C3EBFA]"
      : "bg-[#CFCEFF]";
  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Veux tu vraiment proceder et supprimer cet article cet element?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Supprimer
        </button>
      </form>
    ) : (
      <ProfForm type="update" data={data} />
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen left-0 absolute top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});
const InputField = ({
  label,
  type = "text",
  register,
  defaultValue,
  error,
  inputProps,
  name,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[2.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};
const ProfForm = ({ type, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">Ajouter un nouveau {table}</h1>
      <span className="text-xs text-gray-400 font-medium">
        Informations d'authentification
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Informations Personnelles
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Nom"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Prenom"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Numero de telephone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Addresse"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="type sanguin"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Date d'anniversaire"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Genre</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Femelle</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>importer une photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export {
  CountChart,
  AttendanceChart,
  EnhancedLineChart,
  FinanceChart,
  Dashboard,
  CustomCalendar,
  Annonces,
  MyCalendar,
  TableSearch,
  Pagination,
  Performance,
  FormModal,
  ProfForm,
};
