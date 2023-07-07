import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>jacobgijjah</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Software developer" />
        </Helmet>

      <Header/>

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
      </React.Fragment>
  )
}

export default App;
