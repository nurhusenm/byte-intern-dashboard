"use client";
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: FiBarChart2 },
  {
    name: "Skill Test",
    href: "/dashboard/skill-test",
    icon: TfiMedallAlt,
  },
  { name: "internship", href: "/dashboard/internship", icon: FaRegFile },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-16 items-center gap-4 pl-6 pr-12 rounded-r-full font-sans text-gray-700 font-medium transition-all hover:bg-sky-50",
              {
                "bg-gray-100": pathname === link.href,
              }
            )}
          >
            <LinkIcon
              className={clsx(
                "w-5 h-5 transition-colors ",
                // Custom styles for each icon
                link.name === "Dashboard" && "stroke-[2.5px]",
                link.name === "internship" && " w-5 h-8",
                pathname === link.href && "text-blue-700 w-7 h-9"
              )}
            />
            <span
              className={clsx(
                "font-medium leading-[32px]",
                pathname === link.href && "text-blue-500"
              )}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
}
