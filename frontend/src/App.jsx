// src/App.jsx
import { useState, useRef, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SparkleButton from './components/SparkleButton';
import DownloadDropdownButton from './components/DownloadDropdownButton';

// Public Components
import Login from './components/Login/Login'

// Protected Components  
import Dashboard from './components/Dashboard/Dashboard'
import Questions from './components/Questions/Questions'
import TeamInfo from './components/TeamInfo/TeamInfo'
import Schedule from './components/Schedule/Schedule'

// Original Landing Page Components
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lightBackground from './assets/backg.jpg'
import documentation1 from './assets/documentation1.pdf'
import documentation2 from './assets/documentation2.pdf'
import './App.css'
import RVCELogo from './assets/RVCE_Logo.png';
import CCLogo from './assets/CClogo.png';

// FadeInSection component for scroll-triggered fade-in
function FadeInSection({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`fade-in-section${isVisible ? ' is-visible' : ''}`}>
      {children}
    </div>
  );
}

// Landing Page Component
const LandingPage = () => {
  const downloadPDF = (pdfUrl, filename) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openRegistrationForm = () => {
    const googleFormUrl = "https://forms.gle/weVbhTUdWhSQSYd78";
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url(${lightBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom', // push background image higher
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <FadeInSection>
        <section className="relative flex flex-col items-center justify-center h-[60vh] sm:h-screen">
          <div className="flex flex-row items-center justify-center gap-6 mb-6">
            <img src={RVCELogo} alt="RVCE Logo" className="logo-img" />
            <img src={CCLogo} alt="CC Logo" className="logo-img" />
          </div>
          <div className="absolute inset-0 "></div>
          <div className="text-center z-10 px-2 sm:px-4">
            <h1 className="poke-title shine text-4xl xs:text-5xl sm:text-6xl md:text-9xl font-extrabold">
              HackéMon 2025
            </h1>
            <p className="mt-2 sm:mt-4 text-lg xs:text-xl sm:text-2xl md:text-3xl text-white font-semibold drop-shadow-lg hero-subtitle" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              Gotta Hack'em All!
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <SparkleButton
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg sm:text-xl rounded-full shadow-2xl transition duration-300 transform hover:scale-105"
                onClick={openRegistrationForm}
              >
                Register Now 
              </SparkleButton>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Why Participate Section */}
        <section className="mx-auto px-2 sm:px-6 py-10 sm:py-16 max-w-7xl why-participate-section">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-yellow-300 tracking-tight" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, display: 'block', margin: '0 auto' }}>
            Why Participate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed flex flex-col transition duration-300 hover:scale-105" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className="text-2xl font-bold mb-3 text-yellow-300" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif' }}>Event Overview</h3>
              <p className="text-white text-lg">Hackémon is a gamified CTF and problem-solving event with a Pokémon twist. Solve challenges, earn badges, and unlock clues to a hidden Pokémon!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed flex flex-col transition duration-300 hover:scale-105" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className="text-2xl font-bold mb-3 text-yellow-300" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif' }}>What You Can Expect</h3>
              <p className="text-white text-lg">You will face technical challenges in web security, AI/ML, blockchain, data science, and more. Earn badges for each problem solved, discover Pokémon-themed clues to a mystery Pokémon, receive custom participation certificates, and enjoy recognition, learning, and networking opportunities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-dashed flex flex-col transition duration-300 hover:scale-105" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className="text-2xl font-bold mb-3 text-yellow-300" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif' }}>Perks for Participants</h3>
              <p className="text-white text-lg">All participants will receive a Pokémon-themed certificate, have a chance to be shortlisted for finals based on performance, gain peer engagement and recognition, and experience a blend of fun and technical learning.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      
      <FadeInSection>
        {/* Event Details Section */}
        <section className="mx-auto px-6 py-16 max-w-6xl event-details-section">
          <div className="bg-gradient-to-br from-white/5 via-white/10 to-white/0 rounded-3xl shadow-2xl p-8 border border-white/10 backdrop-blur">
            <h2 className="card-title text-5xl font-bold mb-12 text-yellow-300 drop-shadow-lg text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
              Trainer Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border border-white/10 card-body" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', backdropFilter: 'blur(3px)' }}>
                <div className="text-6xl mb-4">👥</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 700 }}>Team Structure</h3>
                <p className="card-body text-lg text-gray-50" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
                  3 to 4 members per team<br/>
                  Solo participation not allowed
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border border-white/10 card-body" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', backdropFilter: 'blur(3px)' }}>
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 700 }}>Open To</h3>
                <p className="card-body text-lg text-gray-50" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
                  All first-year students of RVCE
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition duration-300 border border-white/10 card-body" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', backdropFilter: 'blur(3px)' }}>
                <div className="text-6xl mb-4">🗓️</div>
                <h3 className="card-title text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 700 }}>Deadline to Register</h3>
                <p className="card-body text-lg text-gray-50" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
                  25th June 2025<br/>
                  <span className="text-base text-gray-300">Free of cost</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Modern Schedule Card Section - Remade */}
        <section className="mx-auto px-2 sm:px-6 py-10 sm:py-16 max-w-2xl schedule-section">
          <div className="bg-gradient-to-br from-white/5 via-white/10 to-white/0 rounded-3xl shadow-2xl p-4 sm:p-8 border border-white/10 backdrop-blur">
            <h2 className="card-title text-4xl sm:text-5xl font-bold mb-10 text-yellow-300 drop-shadow-lg tracking-tight text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
              Battle Calendar
            </h2>
            <div className="flex flex-col gap-6">
              {/* Schedule Item 1 */}
              <div className="flex items-center gap-4 bg-white/5 rounded-2xl shadow-xl p-6 border border-white/10 backdrop-blur transition hover:scale-[1.03]" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', backdropFilter: 'blur(2px)' }}>
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 text-4xl shadow-lg">
                  📅
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white leading-tight mb-1" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 700 }}>Prelims (Online)</h3>
                  <p className="card-body text-base sm:text-lg text-gray-50" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>July 27-28, 7pm to 10pm</p>
                </div>
              </div>
              {/* Schedule Item 2 */}
              <div className="flex items-center gap-4 bg-white/5 rounded-2xl shadow-xl p-6 border border-white/10 backdrop-blur transition hover:scale-[1.03]" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', backdropFilter: 'blur(2px)' }}>
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white text-4xl shadow-lg">
                  📍
                </div>
                <div className="flex-1">
                  <h3 className="card-title text-xl sm:text-2xl font-bold text-white leading-tight mb-1" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 700 }}>Main Event (Offline)</h3>
                  <p className="card-body text-base sm:text-lg text-gray-50" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>July 29, 7am to 12pm<br/>Venue: College Auditorium</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Download Section */}
        <section className='flex flex-row items-center justify-center p-4 sm:p-8 mb-16 relative'>
          <div className="text-center w-full max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
              <DownloadDropdownButton
                onDownload1={() => downloadPDF(documentation1, 'documentation1.pdf')}
                onDownload2={() => downloadPDF(documentation2, 'documentation2.pdf')}
              />
            </div>
            
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        {/* Faculty Advisory Section */}
        <section className='flex flex-col items-center justify-center min-h-[40vh] p-4 sm:p-8'>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-300 drop-shadow-lg text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif' }}>
            Faculty Advisors
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4'>
            {/* Faculty Advisor 1 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Dr. Padmashree T
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Associate Professor & Associate Dean-PG Studies, ISE<br/>Faculty Advisor for the Coding Club
              </p>
            </div>
            {/* Faculty Advisor 2 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Dr. Sagar BM
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Dean Student Affairs<br/>Faculty Advisor for the Coding Club
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        {/* Team Section */}
        <section className='flex flex-col items-center justify-center min-h-screen p-4 sm:p-8'>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-300 drop-shadow-lg text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif' }}>
            Our Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl px-4'>
            {/* Faculty Advisor 1 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Dr. Padmashree T
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Associate Professor & Associate Dean-PG Studies, ISE<br/>Faculty Advisor for the Coding Club
              </p>
            </div>
            {/* Faculty Advisor 2 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Dr. Sagar BM
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                Dean Student Affairs<br/>Faculty Advisor for the Coding Club
              </p>
            </div>
            {/* Student 1 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Sumukha Upadhyaya
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                ISE
              </p>
            </div>
            {/* Student 2 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Raghottam Nadgoudar
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                CSE
              </p>
            </div>
            {/* Student 3 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Shubhang Kuber
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                ISE
              </p>
            </div>
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                G.D.Pranav.L
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                ME
              </p>
            </div>
            {/* Student 4 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Mantradi Shashwati Rao
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                CSE
              </p>
            </div>
            {/* Student 5 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed hover:scale-105 transition duration-300" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <h3 className='team-card-title text-yellow-300 text-center mb-1.5' style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                Snehal Reddy Thadigotla
              </h3>
              <p className='team-card-role text-white text-center text-sm mb-2' style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif', fontWeight: 600 }}>
                ISE
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>


      <FadeInSection>
        {/* Pokémon Center (Contact Us) Section */}
        <section className="mx-auto px-2 sm:px-6 py-10 sm:py-16 max-w-5xl pokemon-center-section">
          <h2 className="card-title text-4xl sm:text-5xl font-bold mb-10 text-yellow-300 drop-shadow-lg tracking-tight text-center" style={{ fontFamily: 'Special Gothic Expanded One, Nunito, Arial, Helvetica, sans-serif', fontWeight: 800 }}>
            Pokémon Center
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Card 1 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-dashed border-white/20 flex flex-col items-start" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <span className="text-xl text-white font-bold mb-3">Sumukha Upadhaya</span>
              <div className="flex items-center gap-3 mb-2 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">sumukhau.is24@rvce.edu.in</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">+91 98440 29396</span>
              </div>
            </div>
            {/* Contact Card 2 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-dashed border-white/20 flex flex-col items-start" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <span className="text-xl text-white font-bold mb-3">G.D.Pranav.L</span>
              <div className="flex items-center gap-3 mb-2 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">gdpranavl.me24@rvce.edu.in</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">+91 63615 23795</span>
              </div>
            </div>
            {/* Contact Card 3 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-dashed border-white/20 flex flex-col items-start" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <span className="text-xl text-white font-bold mb-3">Snehal Reddy Thadigotla</span>
              <div className="flex items-center gap-3 mb-2 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">snehalreddyt.is24@rvce.edu.in</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">+91 99165 77533</span>
              </div>
            </div>
            {/* Contact Card 4 */}
            <div className="team-card bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-dashed border-white/20 flex flex-col items-start" style={{ fontFamily: 'Nunito, Arial, Helvetica, sans-serif' }}>
              <span className="text-xl text-white font-bold mb-3">Mantradi Shashwati Rao</span>
              <div className="flex items-center gap-3 mb-2 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">mshashwatirao.cs24@rvce.edu.in</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 w-full">
                <span className="text-lg text-white font-semibold">+91 86180 69507</span>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        {/* Footer */}
        <footer className=" backdrop-blur-sm text-white py-12 mt-16 relative z-10">
          <div className="mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to hack'em all?</h3>
            <p className="text-xl mb-8">Join Hackémon 2025 and code your way to victory!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <SparkleButton
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                onClick={openRegistrationForm}
              >
                Register Now
              </SparkleButton>
            </div>
          </div>
        </footer>
      </FadeInSection>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/questions" element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        } />
        <Route path="/team-info" element={
          <ProtectedRoute>
            <TeamInfo />
          </ProtectedRoute>
        } />
        <Route path="/schedule" element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        } />
        
        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
