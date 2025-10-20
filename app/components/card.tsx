"use client";

import { useState } from "react";
import { Play, Pause, Heart, Download, MoreHorizontal } from "lucide-react";

export default function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="min-w-[300px] relative bg-gradient-to-br from-purple-800 to-indigo-900 text-white p-5 rounded-2xl shadow-lg w-80 flex flex-col justify-between overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=400&q=80"
        alt="Artist"
        className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-70 rounded-r-2xl"
      />

      <div className="relative z-10">
        <h2 className="text-lg font-semibold">Discover Weekly</h2>
        <p className="text-sm text-gray-300 mt-1">
          The original slow instrumental best playlists.
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-4">
        <button
          onClick={togglePlay}
          className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
        >
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white" />
          )}
        </button>

        {/* Ícones de ação */}
        <div className="flex items-center space-x-4">
          <Heart
            size={20}
            className="cursor-pointer text-white/80 hover:text-white transition"
          />
          <Download
            size={20}
            className="cursor-pointer text-white/80 hover:text-white transition"
          />
          <MoreHorizontal
            size={20}
            className="cursor-pointer text-white/80 hover:text-white transition"
          />
        </div>
      </div>
    </div>
  );
}
