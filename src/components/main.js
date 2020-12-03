/* eslint-disable no-undef */
import React from 'react';
import Header from './header';
import Footer from './Footer';
import './App.css';

function Main() {
  
  return (
    <div>
    <Header />
    <header className="masthead text-white text-center mt-2 bg_image" >
        <div className="container d-flex align-items-center flex-column">
          
            <h1 className="masthead-heading mb-0">Welcome!</h1>
            <hr className="home"/>
          
            <p className="pre-wrap masthead-subheading font-weight-light mb-0">My name is Isatou. I am a full stack software developer.<br/> I am excited to work on your project!</p>
       
            <br/>
            <a href="https://drive.google.com/file/d/1StgOLbTEwiFzw3_Bz0OaAEZzcxdGxzYi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button">View Resume</a>
        </div>
    </header>


    <Footer />
 </div>
  );
  }


export default Main;
