import Image from "next/image";
import Header from "./components/header";
import TittleGlass from "./components/tittle";
import MusicCard from "./components/card";
import ButtonColor from "./components/button";
import PlaylistList from "./components/listPlaylists";
import BottomMenu from "./components/bottonMenu";
import Aurora from "./components/Aurora";

export default function Home() {
  return (
    <div className="w-full flex flex-col">

      <Header />

      <TittleGlass title="Hi, User" />

      <div className="w-full p-[20px] px-5 gap-4 flex overflow-x-auto pb-5">
        <ButtonColor>All</ButtonColor>
        <ButtonColor>Trending</ButtonColor>
        <ButtonColor>Top</ButtonColor>
        <ButtonColor>News</ButtonColor>
      </div>

      <div className="mt-3">
        <div className="text-lg font-semibold pl-5">
          Ultimas Ouvidas
        </div>
        <div className="w-full pl-6 pr-5 gap-5 flex flex-start mt-4 overflow-x-auto pb-10">
          <MusicCard />

          <MusicCard />

          <MusicCard />
        </div>
      </div>

      <PlaylistList />
    </div>
  );
}
