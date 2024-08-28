"use client";
import React, { useState, useRef, useEffect, RefObject } from "react";
import Card from "./Card";
import CardInstr from "./CardInstr";
import useIntersection from "../hooks/useIntersection";
import Carousel from "./Carousel";
import SheetsData from "./Excel";

export default function Home() {
  const dividerStyle = {
    width: "40%",
    borderTop: "2px solid #ccc",
    marginTop: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
  };
  const [activeTab, setActiveTab] = useState<String>("Musculacion"); // Inicialmente, muestra la pestaña Musculacion
  const [currentIndex, setCurrentIndex] = useState(0);
  const GoToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleTabClick = (tab: String) => {
    setActiveTab(tab);
  };

  const [isIntersecting, ref] = useIntersection({
    treshold: 1,
  });

  const [isIntersecting2, ref2] = useIntersection({
    treshold: 1,
  });

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const slides = [
    {
      title: "Musculacion",
      imageSrc: "musc.jpg",
      alt: "Musculacion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim quam, auctor quis auctor a, tincidunt a mi. Integer lacinia eros elementum, consectetur ex ac, condimentum risus.",
    },
    {
      title: "Crossfit",
      imageSrc: "cross.jpg",
      alt: "Crossfit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim quam, auctor quis auctor a, tincidunt a mi. Integer lacinia eros elementum, consectetur ex ac, condimentum risus.",
    },
    {
      title: "Spinning",
      imageSrc: "spin.jpg",
      alt: "Spinning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim quam, auctor quis auctor a, tincidunt a mi. Integer lacinia eros elementum, consectetur ex ac, condimentum risus.",
    },
  ];
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[50rem] object-cover md:h-full md:w-auto"
          src="pic.jpg"
          alt="Gimnasio"
        />
        <div className="absolute top-1/2 left-4 md:left-[7%] transform -translate-y-1/2 w-full md:w-[40%] p-4 text-white text-center">
          <h2 className="font-semibold text-[2rem] md:text-[3rem] italic leading-10 ">
            SALUD PODER FELICIDAD
          </h2>
          <h1 className="font-serif font-bold text-[3rem] md:text-[5rem] mt-2 md:mt-0 leading-[4rem]">
            GIMNASIO POWERLIFT
          </h1>
          <p className="text-lg md:text-xl mt-5 border-t-2 pt-4 mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vitae tortor et massa blandit auctor. Integer non ante quis est
            vestibulum auctor sit amet ac mauris. Donec finibus quam sed justo
            lacinia tempus id ac eros. Proin viverra dolor eu ligula iaculis
            tincidunt. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <div className="flex justify-center mt-10">
            <a
              href=""
              className="text-lg py-3 border rounded-[3rem] w-[50%] borderad bg-white text-black md:bg-transparent md:text-white hover:bg-white hover:text-black hover:scale-[1.05] transition duration-300 ease-in-out"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 text-gray-200">
          <h1 className="title font-serif text-gray-200 text-center text-[3rem] font-bold">
            Gimnasio Gimnasio
          </h1>
        </div>
      </div>

      <div className="bg-[#141414] max-w-[50%] mx-auto rounded-lg all duration-500 ease-in-out">
          <div className="grid grid-cols-3 text-center hover:cursor-pointer">
            {slides.map((slide, slideIndex) => (
              <a
                key={slide.title}
                className={`py-3 text-2xl text-gray-200 ${
                  currentIndex === slideIndex ? "text-white" : "bg-[#1a1a1a]"
                }`}
                onClick={() => GoToSlide(slideIndex)}
              >
                {slide.title}
              </a>
            ))}
          </div>
          <div key={currentIndex} className="py-3 text-2xl text-gray-200 duration-500">
            <Card
              title={slides[currentIndex].title}
              imageSrc={slides[currentIndex].imageSrc}
              alt={slides[currentIndex].alt}
              desc={slides[currentIndex].desc}
            />
          </div>
      </div>

      {/* <div className="bg-[#141414] max-w-[50%] mx-auto rounded-lg transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-3 text-center hover:cursor-pointer">
          <a
            className={`py-3 text-2xl rounded-tl-xl text-gray-200 ${
              activeTab === "Musculacion" ? "text-white" : "bg-[#1a1a1a]"
            }`}
            onClick={() => handleTabClick("Musculacion")}
          >
            Musculacion
          </a>
          <a
            className={`py-3 text-2xl text-gray-200 ${
              activeTab === "Crossfit" ? "text-white" : "bg-[#1a1a1a]"
            }`}
            onClick={() => handleTabClick("Crossfit")}
          >
            Crossfit
          </a>
          <a
            className={`py-3 text-2xl rounded-tr-xl text-gray-200 ${
              activeTab === "Spinning" ? "text-white" : "bg-[#1a1a1a]"
            }`}
            onClick={() => handleTabClick("Spinning")}
          >
            Spinning
          </a>
        </div>
        <div className="all duration-300 ease-in-out ">
          {tabData.map((tab) => (
            <div
              key={tab.title}
              className={`${
                activeTab === tab.title ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            >
              <Card
                title={tab.title}
                imageSrc={tab.imageSrc}
                alt={tab.alt}
                desc={tab.desc}
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="skew-y-3 py-[3rem] ">
        <div className={classNames(
          isIntersecting
          ? "opacity-100 transition-all duration-700 ease-in-out"
          : "opacity-0 transition-all duration-700 ease-in-out",
          "flex justify-center items-center flex-wrap mx-[auto] -skew-y-3"
        )} ref={ref as RefObject<HTMLDivElement> }>
          <Card
            title="Musculacion"
            imageSrc="musc.jpg"
            alt="musculacion"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
          <Card
            title="Crossfit"
            imageSrc="cross.jpg"
            alt="crossfit"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
          <Card
            title="Spinning"
            imageSrc="spin.jpg"
            alt="spinning"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            nibh mollis, accumsan justo at, dapibus erat."
          />
        </div>
      </div> */}
      <div className="instructors" id="instructors">
        <div className="my-10">
          <h2 className="text-center title text-[3rem] font-serif text-gray-200">
            Nuestros instructores
          </h2>
          <hr
            style={{
              width: "40%",
              borderTop: "2px solid #ccc",
              marginTop: "0.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "1rem",
            }}
          />
        </div>
      </div>
      <div className="-skew-y-3 py-10 ">
        <div
          className={classNames(
            isIntersecting2
              ? "opacity-100 transition-all duration-700 ease-in-out"
              : "opacity-0 transition-all duration-700 ease-in-out",
            "flex flex-wrap justify-center align-center mx-auto md:space-x-[5rem] my-5 skew-y-3"
          )}
          style={{
            filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))",
          }}
          ref={ref2 as RefObject<HTMLDivElement>}
        >
          <CardInstr
            title="Maria Rodriguez"
            imageSrc="woman.jpg"
            alt="Instructora"
          />
          <CardInstr title="Juan Perez" imageSrc="man.jpg" alt="Instructor" />
        </div>
      </div>
      <div>
        <SheetsData></SheetsData>
      </div>
    </>
  );
}
