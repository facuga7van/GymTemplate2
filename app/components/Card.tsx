import React, { useState } from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  alt: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, alt, desc }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const constrain = 100;
  const maxRot = 0.5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const calcX = (e.clientY - box.y - box.height / 2) / constrain;
    const calcY = -(e.clientX - box.x - box.width / 2) / constrain;

    const limitedX = Math.min(Math.max(calcX, -maxRot), maxRot);
    const limitedY = Math.min(Math.max(calcY, -maxRot), maxRot);

    const transform = `perspective(100px) rotateX(${limitedX}deg) rotateY(${limitedY}deg)`;
    setTransformStyle(transform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <>
        <div className="py-4">
        <img
          src={imageSrc}
          alt={alt}
          className="mt-5 w-full h-auto max-h-[20rem] object-cover"
          />
          <div className="mx-10 mt-5">
            
          <p className="text-gray-200 text-center text-lg">{desc}</p>
          </div>
          <div className="flex justify-center mt-5">
          <a
              href=''
              className=" text-lg py-3 text-center border rounded-[3rem] w-[50%] borderad bg-white text-black md:bg-transparent md:text-white hover:bg-white hover:text-black hover:scale-[1.05] transition duration-300 ease-in-out"
            >
              Ver más
            </a>
          </div>
          
        </div>
        </>
  );
};

export default Card;
