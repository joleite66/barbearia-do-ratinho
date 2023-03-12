import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import React from "react";
import Serviços from "./components/Serviços";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Serviços />
    </div>
  );
}

export default App;
