import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import React from "react";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Services />
    </div>
  );
}

export default App;
