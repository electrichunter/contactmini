"use client";
import React from "react";
import { Home, Calendar, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: <Home className="h-5 w-5" />, label: "Anasayfa" },
  { href: "/appointments", icon: <Calendar className="h-5 w-5" />, label: "Randevular" },
  { href: "/profile", icon: <User className="h-5 w-5" />, label: "Profil" },
];

const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white border border-gray-200 shadow-md rounded-full z-50 px-4 py-2">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3 py-1 transition ${
                isActive ? "text-indigo-600" : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              {item.icon}
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;
