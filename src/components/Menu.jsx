import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    titre: "MENU",
    sections: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/etudiants.png",
        label: "Etudiants",
        href: "/Etudiants",
      },
      {
        icon: "/professeurs.png",
        label: "Professeurs",
        href: "/Professeurs",
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
    <div className="mt-4 text-sm">
      {menu.map((item) => (
        <div
          className="flex flex-col gap-2"
          key={item.titre}
        >
          <span className="block text-gray-400 font-light">{item.titre}</span>
          {item.sections.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
