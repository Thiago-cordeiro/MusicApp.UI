"use client";

import Image from "next/image";
import { Search, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-4 p-4">
      <div className="w-full flex justify-between items-center gap-4 p-1">
        <Image
          src="/planet1.png" 
          alt="Foto de perfil"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition">
            <Search className="w-6 h-6 text-gray-200" />
          </button>

          <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition">
            <Heart className="w-6 h-6 text-gray-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
