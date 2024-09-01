import React from "react";
import type { Metadata } from "next";
import Home from "./components/Home";
import { QueryClientProvider } from 'react-query';
export const metadata: Metadata = {
  title: "Gimnasio - Inicio",
  description: "descripcion de gimnasio.",
};
console.log(process.env.NODE_ENV)
export default function HomePage() {
  return (
    <>
    <Home/>
    </>
  );
}
