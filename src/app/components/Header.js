import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm pb-4">
      <div className="max-w-[1200px] mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={150}
              height={60}
              priority
              className="!h-[60px] w-auto"
              // style={{ height: "60px" }}
            />
          </Link>

          <div className="flex items-center gap-1 px-1 py-2 border border-gray-200 rounded-lg mr-2">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="profile-pic"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-['Roboto',_'Helvetica',_'Arial',_sans-serif] text-base font-bold">
              Rahil Siddique
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
