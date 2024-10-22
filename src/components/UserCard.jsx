import Image from "next/image";

const UserCard = ({ type }) => {
  return (
    <div
      style={{ background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)" }}
      className="rounded-2xl p-4 flex-1 min-w-[130px]"
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          22/10/2024
        </span>
        <Image alt="" src="/more.png" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold">4582</h1>
      <h2 className="capitalize text-sm font-medium">{type}</h2>
    </div>
  );
};

export default UserCard;
