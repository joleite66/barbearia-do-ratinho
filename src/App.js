import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import React from 'react';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Analytics />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
