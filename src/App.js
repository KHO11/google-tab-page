import React from 'react';
import google from './google.png';
import skype from "./skype.png";
import gmail from "./gmailpic.png";
import whatsapp from "./whatsapp.png"
import facebook from "./facebookpic.png";
import twitter from "./twitterpic.png";
import discord from "./discord.png";
import instagram from "./instagrampic.jpg";
import tikTok from "./tikTok.png";
import snapchat from "./snapchat.jpg";
import linkedin from "./linkedin.png"
import './App.css';

function App() {
  return (
    <div className="App">

      
      <a className = "topInfo" href = "https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
        Gmail
      </a>

      <a className = "topImage" href = "https://www.google.co.uk/imghp?hl=en-GB&tab=ri&ogbl">
        Images
      </a>

      <header className="App-header">
        <img src={google} className="googleName" alt="google" />
      </header>

      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"/>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>

      <br/><br/>

      <a href = "https://www.skype.com/en/">
        <img src={skype} className="skypeApp" alt="skypeApp"/>
        <a href="https://www.skype.com/en/" className="skypeName">Skype</a>
      </a>

      <a href = "https://www.skysports.com/">
        <img src={gmail} className="gmailApp" alt="gmail" />
        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className = "gmailName" > Gmail</a>
      </a>

      <a href = "https://www.whatsapp.com/">
        <img src={whatsapp} className="whatsAPP" alt="whatsapp"/>
        <a href="https://www.whatsapp.com/" className="whatsappName">Whatsapp</a>
      </a>

      <a href="https://www.facebook.com/">
        <img src={facebook} className="facebook" alt="facebook"/>
        <a href="https://www.facebook.com/" className="facebookName">Facebook</a>
      </a>

      <a href ="https://twitter.com/?lang=en-gb">
        <img src={twitter} className="twitter" alt="twitter"/>
        <a href= "https://twitter.com/?lang=en-gb" className="twitterName">Twitter</a>
      </a>

      <a href="https://discordapp.com/">
        <img src={discord} className="discord" alt="discord"/>
        <a href="https://discordapp.com/" className="discordName">Discord</a>
      </a>

      <a href="https://www.instagram.com/?hl=en">
        <img src={instagram} className="instagram" alt="instagram"/>
        <a href="https://www.instagram.com/?hl=en" className="instagramName">Instagram</a>
      </a>

      <a href="https://www.tiktok.com/en/">
        <img src={tikTok} className="tikTok" alt="tikTok"/>
        <a href="https://www.tiktok.com/en/" className="tiktokName">Tik Tok</a>
      </a>

      <a href="https://www.snapchat.com/l/en-gb/">
        <img src={snapchat} className="snapchat" alt="snapchat"/>
        <a href="https://www.snapchat.com/l/en-gb/" className="snapchatName">Snapchat</a>
      </a>

      <a href="https://www.linkedin.com/feed/">
        <img src={linkedin} className="linkedin" alt="linkedin"/>
        <a href="https://www.linkedin.com/feed/" className="linkedinName">Linkedin</a>
      </a>
    </div>
  );
}

export default App;
