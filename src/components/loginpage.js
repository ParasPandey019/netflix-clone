import React, { useState} from 'react';
import "../stylesheets/LoginPage.css";
import Logo from "../media/logo.png";
import tv from "../media/home-tv.jpg";
import mobile from "../media/home-mobile.jpg";
import imac from "../media/home-imac.jpg";
import QnAs from './QnA.js';
import {useNavigate} from "react-router-dom";

function LoginPage(props) { 
const [istrue,setIsTrue] = useState([false,false,false,false,false,false]);

const showAnswer = (index)=>{
  let temp = [];
  istrue.forEach((item,count)=>{
    if(count === index)temp.push(!item);
    else temp.push(item);
  });

  setIsTrue(temp);
}

const goTo = () =>{
  navigate("/home");
  window.scrollTo(0,0);
}

const navigate = useNavigate();

  return (
    <div className="loginPage">
        <div className="loginPage_background" style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg")`,
          backgroundPosition: "center center"
          }}>
            <img className="loginPage_logo" src={Logo} alt=""></img>
            <button onClick={goTo} className="loginPage_button">TRY DEMO</button>
            <div className="loginPage_gradient"></div>
            <div className="loginPage_body">
              <h1>Unlimited films, TV programmes and more</h1>
              <h2>Watch anywhere. Cancel any time</h2>
              <h3>Ready to Watch? Enter your email to create or restart your membership</h3>
              <div className="loginPage_input">
              <button onClick={goTo} className="loginPage_inputBtn">TRY DEMO FOR FREE</button>
          </div>
        </div>
        </div>
        <div className='loginPage_containers'>
          <div className='bottomContainer bottomContainer1'>
            <div className='container_a subContainer1_a'>
              <p className='container_title1'>Enjoy on your TV.</p>
              <p className='container_text1'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='imageContainer'>
              <img className='tv' src={tv} alt=''></img>
            </div>
          </div>
          <div className='bottomContainer bottomContainer2'>
              <div className='imageContainer'>
                <img className='mobile' src={mobile} alt=''></img>
              </div>
              <div className='container_a subContainer2_a'>
                <p className='container_title2'>Download your programmes to watch on the go.</p>
                <p className='container_text2'>Save your data and watch all your favourites offline.</p>
              </div>
          </div>
          <div className='bottomContainer bottomContainer3'>
              <div className='container_a subContainer3_a'>
                <p className='container_title3'>Watch everywhere.</p>
                <p className='container_text3'>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</p>
              </div>
              <div className='imageContainer'>
              <img className='imac' src={imac} alt=''></img>
              </div>
          </div>
        </div>
        <div className='FAQ'>
          <div className='sub_FAQ'>
            <p>Frequently Asked Questions</p>
              <div className='questions'>
                {QnAs.map((QnA,index) =>{
                  return (
                  <div className='questionContainer'>
                    <div className='questionContainerInner' onClick={()=>{showAnswer(index)}}>
                      <p className='question'>{QnA.q}</p>
                      <p className='plusSymbol'>{!istrue[index] ? <span>&#43;</span> : <span>&#8722;</span>}</p>
                    </div> 
                    <div className = {!istrue[index] ? 'nonedisplay': "answerContainer"}>
                    <div className={'answer'}>{QnA.a}</div>
                    </div>
                  </div>);
                })}
              </div>
            <p className='bottom_input_text'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="bottom_input">
              <button onClick={goTo} className="bottom_inputBtn">TRY DEMO FOR FREE</button>
            </div>
          </div>
        </div>
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

export default LoginPage;


            
            
              
            
            
            
