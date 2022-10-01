import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Services from './Components/Services/Services';
import Contacts from './Components/Contacts/Contacts';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <About />
     <Experience />
     <Services />
     <Portfolio/>
     <Testimonials />
     <Contacts />
     <Footer />
     
    </div>
  );
}

export default App;
