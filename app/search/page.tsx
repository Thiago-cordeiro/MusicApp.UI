"use client";

import Image from "next/image";
import Header from "../components/header";
import TittleGlass from "../components/tittle";
import { Play, Search, Upload } from "lucide-react";
import PlaylistList from "../components/listPlaylists";
import { useState } from "react";

const BASE_URL = 'https://musicapp-api-7wvc.onrender.com/'

interface ResponseQuery {
    id: number;
    title: string;
    link: string;
}

export default function Busca() {
    const [query, setQuery] = useState<string>('');
    const [baixando, setBaixando] = useState<boolean>(false);
    const [buscando, setBuscando] = useState<boolean>(false);
    const [listaRespQuery, setListRespQuery] = useState<ResponseQuery[]>([]);

    const fetchQueryMusic = async () => {
        setBuscando(true);
        try {
            const res = await fetch(`${BASE_URL}music/search?query=${query}&limit=5`);

            if (!res.ok) {
                alert("Erro ao buscar query");
                return;
            }
            const data: ResponseQuery[] = await res.json();

            console.log(data);

            setListRespQuery(data);
        } catch (error) {
            console.error(error);
            alert("Erro na requisição");
        }
        setBuscando(false);
    };

    return (
        <div className="flex flex-col w-full">

            <div className="w-full flex flex-col justify-center">
                <Header />

                <TittleGlass title="Search" />

                {/* Input Section */}
                <div className="flex h-[34px] text-[14px] text-white/60 m-auto">
                    <input
                        className="input w-[200px] bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-l-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                        name="text"
                        type="text"
                        placeholder="Serch music..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            fetchQueryMusic();
                        }}
                        className="text-[#f4f4f5] px-3 py-1 rounded-r-lg border-y border-r border-r-white/10 border-y-white/10 hover:bg-zinc-800/40 transition-all duration-150 easy-in-out"
                    >
                        <Search />
                    </button>
                </div>

                {buscando && (
                    <div className="w-full mt-10 flex items-center justify-center">
                        <div className="flex-col gap-4 w-full flex items-center justify-center">
                            <div
                                className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                            >
                                <div
                                    className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                                ></div>
                            </div>
                        </div>

                    </div>
                )}

                {!buscando && (
                    <div className="mt-2 mb-20 space-y-4 p-7">
                        {listaRespQuery.map((playlist) => (
                            <div
                                key={playlist.id}
                                className="flex items-center justify-between bg-[#111] hover:bg-[#1a1a1a] transition-colors p-3 rounded-xl cursor-pointer"
                            >
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src={'https://i.pinimg.com/736x/d7/fa/93/d7fa938f70599a3213088646e35eb690.jpg'}
                                        alt={playlist.title}
                                        width={56}
                                        height={56}
                                        className="rounded-xl object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-sm">{playlist.title}</h3>
                                    </div>
                                </div>
                                <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                                    <Upload size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>

    );
}
