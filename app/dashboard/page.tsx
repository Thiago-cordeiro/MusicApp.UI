"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState("audio.mp3");
  const audioRef = useRef<HTMLAudioElement>(null);

  const [musics, setMusics] = useState<Array<{ title: string; url: string }>>([]);

  useEffect(() => {
    const stored = localStorage.getItem("musics");
    if (stored) setMusics(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("musics", JSON.stringify(musics));
  }, [musics]);

  const fetchDownloadMusic = async () => {
    if (!videoUrl.trim()) return alert("Cole uma URL do YouTube primeiro!");

    setLoading(true);
    setDownloadUrl(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/music/streaming/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoUrl }),
      });

      console.log(response);
      if (!response.ok) throw new Error("Erro ao baixar áudio");

      const disposition = response.headers.get("content-disposition");
      let file = "audio.mp3";
      if (disposition && disposition.includes("filename=")) {
        file = disposition.split("filename=")[1].replace(/["']/g, "");
      }
      setFilename(file);

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);

      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play();
      }

      setDownloadUrl(audioUrl);

   
      const newMusic = { title: file, url: audioUrl };
      setMusics((prev) => [...prev, newMusic]);

    } catch (err) {
      console.error(err);
      alert("Erro ao baixar ou reproduzir áudio");
    } finally {
      setLoading(false);
    }
  };

  const clearMusics = () => {
    if (confirm("Tem certeza que deseja limpar todas as músicas?")) {
      localStorage.removeItem("musics");
      setMusics([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 px-6">
      <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">
          🎵 Baixar e Tocar Áudio do YouTube
        </h1>

        <input
          type="text"
          placeholder="Cole a URL do YouTube aqui..."
          className="w-full p-3 rounded-lg text-white bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <button
          onClick={fetchDownloadMusic}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Baixando..." : "Baixar e Reproduzir"}
        </button>

        <audio
          ref={audioRef}
          controls
          className="mt-6 w-full rounded-lg bg-gray-900 border border-gray-700"
        />

        {downloadUrl && (
          <a
            href={downloadUrl}
            download={filename}
            className="block mt-4 text-center text-blue-400 underline hover:text-blue-300"
          >
            ⬇️ Baixar: {filename}
          </a>
        )}

        {/* Lista de músicas salvas */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2 text-blue-300">🎶 Suas Músicas</h2>
          {musics.length === 0 ? (
            <p className="text-gray-400 text-sm">Nenhuma música salva ainda.</p>
          ) : (
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {musics.map((music, index) => (
                <li
                  key={index}
                  className="bg-gray-900 border border-gray-700 p-2 rounded-lg flex justify-between items-center"
                >
                  <span className="truncate max-w-[70%]">{music.title}</span>
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.src = music.url;
                        audioRef.current.play();
                      }
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    ▶️
                  </button>
                </li>
              ))}
            </ul>
          )}

          {musics.length > 0 && (
            <button
              onClick={clearMusics}
              className="mt-4 w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold"
            >
              🗑️ Limpar Lista
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
