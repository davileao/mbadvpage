import React from 'react';
import './App.css';
import './reset.css';
import DrawerAppBar from "./components/navbar";
import ScrollButton from "./components/ScrollTop";
import Welcome from "./components/welcome";
import SocialMedia from "./components/socialmedia";
import FloatingActionButtons from "./components/fab";
import Contact from "./components/contact";
import Footer from "./components/foooter";

function App() {
    return (
        <div className="App">
            <DrawerAppBar/>
            <SocialMedia/>
            <ScrollButton/>
            <Welcome/>
            <Contact/>
            <FloatingActionButtons/>
            <Footer/>

        </div>
    );
}

export default App;
