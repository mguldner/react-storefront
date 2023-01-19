import React from "react";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export function Carousel() {
  return (
    <div className="bg-gradient-to-r from-neutral-800 to-stone-400 pt-8">
      <ResponsiveCarousel
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
        className="container flex justify-center"
      >
        <iframe
          title={"Video"}
          src={`https://www.youtube.com/embed/qa4JCsdV-KA`}
          className="w-full h-5/6 md:w-4/5"
          allowFullScreen
        />
        <div className="h-fit">
          <Image
            className="object-contain h-[60vh]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokémon"
            width={400}
            height={400}
          />
        </div>
        <div className="h-fit">
          <Image
            className="object-contain h-[60vh]"
            src="https://upload.wikimedia.org/wikipedia/fr/a/a5/Yu-Gi-Oh_Logo.JPG"
            alt="Yu-Gi-Oh!"
            width={400}
            height={400}
          />
        </div>
      </ResponsiveCarousel>
    </div>
  );
}
