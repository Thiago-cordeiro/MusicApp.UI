import Image from "next/image";
import Header from "../components/header";
import TittleGlass from "../components/tittle";
import { Search } from "lucide-react";
import PlaylistList from "../components/listPlaylists";


export default function biblioteca() {
    return (
        <div className="flex flex-col w-full">

            {/* Header Section */}
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
                    />
                    <button
                        className="text-[#f4f4f5] px-3 py-1 rounded-r-lg border-y border-r border-r-white/10 border-y-white/10 hover:bg-zinc-800/40 transition-all duration-150 easy-in-out"
                    >
                        <Search />
                    </button>
                </div>

                <div className="mt-10">
                    <PlaylistList />
                </div>
            </div>
        </div>

    );
}
