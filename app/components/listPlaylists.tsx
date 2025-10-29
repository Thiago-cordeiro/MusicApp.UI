"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Playlist {
  id: number;
  title: string;
  author: string;
  songs: number;
  cover: string;
}

const playlists: Playlist[] = [
  {
    id: 1,
    title: "Starlit Reverie",
    author: "By Buskard",
    songs: 43,
    cover: "https://i.pinimg.com/736x/98/98/19/9898199841701e52cb871ed12b22204a.jpg",
  },
  {
    id: 2,
    title: "Midnight Confessions",
    author: "By Luna",
    songs: 52,
    cover: "https://i.pinimg.com/736x/84/10/12/841012172085d5dd4a8a11ff51307b16.jpg",
  },
  {
    id: 3,
    title: "Chill Vibes",
    author: "By SoundHub",
    songs: 31,
    cover: "https://i.pinimg.com/736x/d7/fa/93/d7fa938f70599a3213088646e35eb690.jpg",
  },
];

export default function PlaylistList() {
  return (
    <div className="text-white w-full max-w-[90dvw] mx-auto mb-27">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Top daily playlists</h2>
        <button className="text-sm text-gray-400 hover:text-white">See all</button>
      </div>

      <div className="space-y-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="flex items-center justify-between bg-[#111] hover:bg-[#1a1a1a] transition-colors p-3 rounded-xl cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={playlist.cover}
                alt={playlist.title}
                width={56}
                height={56}
                className="rounded-xl object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm">{playlist.title}</h3>
                <p className="text-xs text-gray-400">
                  {playlist.author} • {playlist.songs} songs
                </p>
              </div>
            </div>
            <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
              <Play size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
