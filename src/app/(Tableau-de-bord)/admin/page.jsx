import UserCard from "@/components/UserCard";
import CountChart from "@/components/Comptes";
const admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Etudiants" />
          <UserCard type="Professeur" />
          <UserCard type="Administration" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3  h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3  h-[450px]"></div>
        </div>
      </div>
      {/* RIGHT */}
    </div>
  );
};

export default admin;