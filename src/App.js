import Footer from "./components/Footer";
import Fotos from "./components/Fotos";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import React from "react";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Fotos />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
