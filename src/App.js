import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Fotos from './components/Fotos';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Analytics />
      <Fotos />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
