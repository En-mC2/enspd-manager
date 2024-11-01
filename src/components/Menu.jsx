import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    titre: "MENU",
    sections: [
      {
        icon: "/home.png",
        label: "Tableau de bord",
        href: "/admin",
      },
      {
        icon: "/professeurs.png",
        label: "Professeurs",
        href: "/list/Professeurs",
      },
      {
        icon: "/etudiants.png",
        label: "Etudiants",
        href: "/Etudiants",
      },
      {
        icon: "/result.png",
        label: "resultats",
        href: "/list/resultats",
      },
      {
        icon: "/subject.png",
        label: "matieres",
        href: "/list/Matieres",
      },
      {
        icon: "/class.png",
        label: "classes",
        href: "/list/classes",
      },
      {
        icon: "/exam.png",
        label: "examens",
        href: "/list/Exams",
      },
      {
        icon: "/annonces.png",
        label: "annonces",
        href: "/annonces",
      },
    ],
  },
  {
    titre: "Autres",
    sections: [
      {
        icon: "/profile.png",
        label: "profile",
        href: "/profile",
      },
      {
        icon: "/SeDeconnecter.png",
        label: "SeDeconnecter",
        href: "/SeDeconnecter",
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className="mt-4 text-sm fixed z-50 left-0 top-3 mr-10">
      {menu.map((item) => (
        <div className="flex flex-col gap-2 " key={item.titre}>
          <span className="block text-gray-400 font-light">{item.titre}</span>
          {item.sections.map((i) => (
            <Link
              href={i.href}
              key={i.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 rounded-md hover:bg-blue-50"
            >
              <Image src={i.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
