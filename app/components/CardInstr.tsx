import React, { useState } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  alt: string;
}

const CardInstr: React.FC<CardProps> = ({ title, imageSrc, alt }) => {
 

  return (
    <div
    id="Card"
    className="w-full max-w-[30rem] min-h-[35rem] sm:w-1/2 md:w-1/3 mx-5"
    
  >
    <div className="rounded-lg relative group hover:scale-[1.05] transition duration-300 ease-in-out">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full rounded-tl-lg rounded-tr-lg md:rounded-lg h-auto max-h-[30rem] md:max-h-[35rem] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-0 rounded-lg  group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="hidden md:absolute top-0 left-0 w-full h-full  md:flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2
          className="text-3xl font-semibold text-white"
          style={{
            filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))",
          }}
        >
          {title}
        </h2>
      </div>
      <div>
        <h2 className="md:hidden text-3xl font-semibold p-3 text-center">
        {title}
        </h2>
      </div>
    </div>
  </div>
  );
};

export default CardInstr;
