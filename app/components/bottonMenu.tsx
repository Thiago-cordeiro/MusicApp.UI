"use client";
import { Home, Library, Search, Settings } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BottomMenu() {
  const [active, setActive] = useState("home");
  const router = useRouter(); 

  const buttons = [
    { id: "home", icon: <Home size={22} />, path: "/" },
    { id: "library", icon: <Library size={22} />, path: "/library" },
    { id: "chat", icon: <Search size={22} />, path: "/dashboard" },
    { id: "settings", icon: <Settings size={22} />, path: "/settings" },
  ];

  const handleClick = (btn: any) => {
    setActive(btn.id);
    router.push(btn.path);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1a1a1a] rounded-[30px] px-4 py-2 shadow-lg border border-white/10">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => handleClick(btn)}
          className={`p-3 rounded-full transition-all duration-300 ${
            active === btn.id
              ? "border text-white scale-110 shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
}
