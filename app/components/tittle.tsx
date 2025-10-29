"use client";
import React from "react";

interface TittleGlassProps {
    title: string;
}

export default function TittleGlass({ title }: TittleGlassProps) {
    return (
        <div
            className="mt-2 mb-5 mx-auto w-full max-w-xs relative flex flex-col items-center justify-center text-center overflow-visible"
        >
            <h3 className="text-5xl font-bold">{title}</h3>
            <div className="w-full relative flex flex-col items-center justify-center">
                <div
                    className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"
                ></div>
                <div
                    className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"
                ></div>
                <div
                    className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"
                ></div>
                <div
                    className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"
                ></div>
                <div
                    className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
                ></div>
            </div>

            <span
                className="absolute -z-[1] backdrop-blur-sm inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-black before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"
            ></span>
        </div>
    );
}