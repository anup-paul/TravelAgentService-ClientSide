import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header';
import MemorableMoment from '../MemorableMoments/MemorableMoment';
import Navbar from '../Navbar/Navbar';
import Reviews from '../Reviews/Reviews/Reviews';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <Reviews></Reviews>
            <MemorableMoment></MemorableMoment>
            <Contact></Contact>
            <Footer></Footer>
         </div>
    );
};

export default Home;