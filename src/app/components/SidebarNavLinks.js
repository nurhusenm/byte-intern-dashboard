"use client";
import { FaChartSimple, FaMedapps } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: FaChartSimple },
  {
    name: "Skill Test",
    href: "/dashboard/skill-test",
    icon: FaMedapps,
  },
  { name: "internship", href: "/dashboard/internship", icon: CiFileOn },
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
              "flex h-[50px] items-center gap-3 pl-6 py-2.5 font-sans text-gray-700 font-medium transition-colors hover:bg-sky-50",
              {
                "bg-blue-100 text-indigo-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-5 h-5" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
