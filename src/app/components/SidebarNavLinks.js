"use client";
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Dashboard", href: "/dashboard", icon: FiBarChart2 },
  {
    name: "Skill Test",
    href: "/dashboard/skill-test",
    icon: TfiMedallAlt,
  },
  { name: "Internship", href: "/dashboard/internship", icon: FaRegFile },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        // Determine the icon styles based on the current pathname
        const iconStyles = clsx(
          "transition-colors", // Base transition class
          "w-5 h-5", // Default size
          link.name === "Dashboard" && "stroke-[2.5px]", // Custom style for Dashboard
          link.name === "internship" && "w-4 h-6", // Custom size for Internship
          pathname === link.href && "text-blue-700 w-6 h-6" // Active link styles
        );

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-16 items-center grow gap-4 pl-6 pr-12 md:rounded-r-full font-sans text-gray-700 font-medium transition-all hover:bg-sky-50 md:justify-start md:flex-none justify-center",
              {
                "bg-gray-100": pathname === link.href, // Highlight active link
              }
            )}
          >
            <LinkIcon className={iconStyles} />
            <span
              className={clsx(
                "hidden md:block font-medium leading-[32px]",
                pathname === link.href && "text-blue-500" // Change text color for active link
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
