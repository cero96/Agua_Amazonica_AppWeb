import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import "../assets/styles/global.css"

export default function Home() {
  return (
    <div className="layout">
      <Sidebar/>
      <main className="main">
        <Hero/>
      </main>
    </div>
  );
}
