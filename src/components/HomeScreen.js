import React from 'react';
import "../stylesheets/HomeScreen.css";
import NavBar from "./Navbar";
import Banner from "./Banner";
import Row from "./row";
import requests from "./requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
        <NavBar />    
        <Banner />
        <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" url={requests.fetchTopRated} isLargeRow={false}/>
        <Row title="Action Movies" url={requests.fetchActionMovies} isLargeRow={false}/>
        <Row title="Comedy Movies" url={requests.fetchComedyMovies} isLargeRow={false}/>
        <Row title="Horror Movies" url={requests.fetchHorrorMovies} isLargeRow={false}/>
        <Row title="Romance Movies" url={requests.fetchRomanceMovies} isLargeRow={false}/>
        <Row title="Documentaries" url={requests.fetchDocumentaries} isLargeRow={false}/>
        <div className='footer'>
        <div className="footerContainer">
              <div className='footerImg'>
                <img src="https://user-images.githubusercontent.com/52352285/96442452-c64f2700-1228-11eb-8c92-35a64d4cef32.gif" style={{height:"80px"}}alt="reactLogo"></img>
                <img src="https://thumbs.gfycat.com/VerifiableObviousLark-max-1mb.gif" style={{height:"80px"}} alt='netflix'></img>
              </div>
              <p style={{marginLeft:"20px"}}>Netflix Clone Project &#169; ParasPandey019</p>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen