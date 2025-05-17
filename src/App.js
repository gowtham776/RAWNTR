import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Hero from './components/Hero';
import ImpactQuotes from './components/ImpactQuotes';
import MissionStatement from './components/MissionStatement';
import ImpactStatistics from './components/ImpactStatistics';
import Donations from './components/Donations';
import Activities from './components/Activities'; // Added import for Activities
import GreatInitiatives from './components/GreatInitiatives';
import UserReviews from './components/UserReviews';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <div className="App bg-[#FFF8F0] min-h-screen">
        {showIntro ? (
          <Intro onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <Header />
            <main className="pt-24 px-4 text-gray-800">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <section className="mt-8 md:mt-16">
                        <Hero />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <ImpactQuotes />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <MissionStatement />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <ImpactStatistics />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <Donations />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <Activities />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <GreatInitiatives />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <UserReviews />
                      </section>
                      <section className="mt-8 md:mt-16">
                        <Contact />
                      </section>
                    </>
                  }
                />
                <Route path="/donations" element={<Donations />} />
                <Route path="/volunteer" element={<ImpactStatistics />} />
                <Route path="/about" element={<GreatInitiatives />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;