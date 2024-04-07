import React from "react";
import type { Metadata } from "next";
import Home from "./components/Home";

export const metadata: Metadata = {
  title: "Gimnasio - Inicio",
  description: "descripcion de gimnasio.",
};

export default function HomePage() {
  return (
    <>
    <Home/>
    </>
  );
}
