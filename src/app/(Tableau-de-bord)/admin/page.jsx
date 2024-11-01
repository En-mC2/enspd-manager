import { UserCard } from "@/components/UserCard";
import {
  CountChart,
  AttendanceChart,
  EnhancedLineChart,
  FinanceChart,
  Dashboard,
  CustomCalendar,
  Annonces,
  MyCalendar,
} from "@/components/Comptes";
const admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ml-6">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Etudiants" />
          <UserCard type="Professeur" />
          <UserCard type="Administration" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3  h-[450px]">
            <CountChart />
            {/* <CustomCalendar /> */}
          </div>
          <div className="w-full lg:w-2/3  h-[450px]">
            {/* <AttendanceChart /> */}
            <EnhancedLineChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          {/* <AttendanceChart /> */}
          <Dashboard />
        </div>
        {/* <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
        <div className="w-full h-[500px]">
          <Dashboard />
        </div> */}
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <CustomCalendar />
        {/* <MyCalendar /> */}
        <Annonces />
      </div>
    </div>
  );
};

export default admin;
