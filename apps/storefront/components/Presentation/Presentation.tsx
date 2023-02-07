import React from "react";

export function Presentation() {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-white text-6xl text-center font-display">
        Ton tattoo shop spécialisé dans les tatouages anime/manga, le jcc/tcg et l&apos;import de
        produits japonais!
      </div>
      <div className="text-gray-400 text-5xl text-center font-display">
        Découvre le principe de notre shop en 1 clic à travers cette video immersive!
      </div>
      <iframe
        title={"Présentation du shop"}
        src={`https://www.youtube.com/embed/qa4JCsdV-KA`}
        className="px-10 w-full aspect-[5/3]"
        allowFullScreen
      />
    </div>
  );
}
