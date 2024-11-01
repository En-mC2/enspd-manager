import { TableSearch, Pagination } from "@/components/Comptes";
import { subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Table } from "@/components/UserCard";
const columns = [
  { header: "Subject Name", Accessor: "name" },
  {
    header: "Professeurs",
    Accessor: "Professeur",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    Accessor: "Action",
  },
];

const StudentsListPage = () => {
  const renderRow = (item) => (
    <tr
      key={item.key}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-[#F1F0FF] text-sm"
    >
      <td className="flex items-center gap-4 p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td className="hidden md:table-cell">{item.Professeurs.join(",")}</td>
      <td>
        <div className="flex items-center gap-4 p-4">
          <Link
            href={`/list/teachers/${item.id}`}
            className="flex items-center gap-2"
          >
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C3EBFA]">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#CFEEFF]">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Liste des Sujets
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/.png" alt="" width={14} height={14} />
            </button> */}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} data={subjectsData} renderRow={renderRow} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default StudentsListPage;
