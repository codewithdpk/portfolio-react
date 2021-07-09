import React from 'react';
import { BrowserView } from 'react-device-detect';
import './styles.css';
import email_illu from '../../resources/SVGS/email_ui.svg';
const LandingPage = () =>{

    const projects = [
        {
            name:'avatar-me',
            description:"avatar-me is a API based random avatar generator website to generate profile picture replacements and user's name based profile picture.",
            social:[
               { name:'Github',icon:'fab fa-github',link:'https://github.com/codewithdpk/avatar-me'},
              
            ]
        },
        {
            name:'Pretty-Pretty',
            description:'Pretty-Pretty is a UI component library of ready-made components like Buttons, Cards and more.',
            social:[
               { name:'Github',icon:'fab fa-github',link:'https://github.com/codewithdpk/pretty-pretty'},
               { name:'NPM',icon:'fab fa-npm',link:'https://www.npmjs.com/package/pretty-pretty'}
            ]
        },
        {
            name:'react-data-layer',
            description:'A data layer for react applications to prohibits unnecessary loading of same data by creating cache of data inside session storage. 🚀',
            social:[
               { name:'Github',icon:'fab fa-github',link:'https://github.com/codewithdpk/react-data-layer'},
               { name:'NPM',icon:'fab fa-npm',link:'https://www.npmjs.com/package/react-data-layer-api'}
            ]
        },
        {
            name:'Encryption-Decryption-Model',
            description:'Crypto AES 256 Data encryption-decryption model example with plain javascript client and Nodejs, Expressjs server.',
            social:[
               { name:'Github',icon:'fab fa-github',link:'https://github.com/codewithdpk/encrypt-decrypt-model'},
   
            ]
        }
       ];

       const socialIcons = {
           "discord":"fab fa-discord",
           "github":"fab fa-github",
           "email":"fas fa-envelope",
           "twitter":"fab fa-twitter"
       }

       const socialRefers = {
        "discord":'cwdpk#6814',
        "github":"/codewithdeepak",
        "email":"codewithdeepak@yahoo.com",
        "twitter":"@RandomDeeps"
       }

       const socialHref = {
        "discord":'https://discord.com/',
        "github":"https://github.com/codewithdpk",
        "email":"mailto:codewithdeepak@yahoo.com",
        "twitter":"https://twitter.com/DeepsRandom"
       }

    return (
        <BrowserView>
            <div className="container-one">
                    <div className="container-inner-one">
                        <span className="span-hey-gradient">
                            HEY 👋🏻 I AM
                        </span>
                        <span className="span-my-name">
                            Deepak Suthar
                        </span>
                    </div>
                </div> 

                <div className="container-two">
                    <div className="heading-area">
                            <span className="heading-title">
                                About Me
                            </span>
                            <div className="heading-title-line">
                                
                            </div>
                    </div>
                    <div className="about-me-box-container">
                        <span className="about-me-span">
                        Over the last 1 year, I've not only gained a relatively extensive skill set but also a high amount of passion for what I do. It is only because of this that every project I have produced to date has been of a high caliber. I'm a competent front-end developer with my skills lying particularly in languages such as Javascript, Java(Android), C++. My skills also extend to having the ability to complete any prototyping (UI/UX design). As well as this, I'm also able to utilize a selection of different libraries & engines such (React and Nodejs) to better complete the endeavor and have plenty of experience in doing so. Along with the various programming skills I possess, I am a startup enthusiast. I have had an experience of building networks of all types to large scales and have certainly demonstrated such when working with a selection of “startup” companies.                        </span>
                    </div>
                </div> 

                <div className="container-two">
                    <div className="heading-area">
                            <span className="heading-title">
                                My Projects
                            </span>
                            <div className="heading-title-line">
                                
                            </div>
                    </div>
                    <div className="project-showcase-container">
                        {projects.map((project)=>{
                            return (
                                <div className="a-project-container">
                            <span className="project-name">
                                {project.name}
                            </span>
                           <span className="project-description">
                            {project.description} 
                          </span>
                          <div className="social-icons">
                              {project.social.map((icon)=>{
                                  return (
                                      <a target = "_blank" rel="noopener noreferrer" href={icon.link} className="social-icon">
                                      <i class={`${icon.icon}`}></i>
                                      </a>
                                  )
                              })}
                            </div>
                        </div>
                            )
                        })}
                        
                        
                    </div>
                </div> 
        
                <div className="container-two">
                    <div className="heading-area">
                            <span className="heading-title">
                                Reach Me
                            </span>
                            <div className="heading-title-line">
                                
                            </div>
                    </div>
                    <div className="reach-me-container">
                            <div className="illustration-box">
                                    <img src ={email_illu} className="illustration-image" alt={`email-box`}/>
                            </div>
                            <div className="email-box-container">
                                <span className="email-text-heading">
                                The latest trends in your inbox every week!
                                </span>
                                <span className="email-sub-heading">
                                A weekly email featuring lots of development and designing stuff.
                                </span>
                                <div className="email-parent-holder">
                                    <input className="email-input-box" placeholder="yourname@example.com"/>
                                    <button className="send-button" onClick ={()=>alert("Oops! You have come too early. Work in progress.")}>Send</button>
                                </div>
                            </div>
                        
                        
                    </div>
                </div> 
                <div className="container-bottom" >
                <div className="social-accounts-container">

                        <a className="social-account" target="_blank" rel="noopener noreferrer" href={socialHref.discord}>
                            <span className="social-icon">
                            <i class={`${socialIcons.discord}`}></i>
                            </span>
                            <span className="normal-text">
                                {socialRefers.discord}
                            </span>
                            </a>     
                            <a className="social-account" target = "_blank" rel="noopener noreferrer" href={socialHref.github}>
                            <span className="social-icon">
                            <i class={`${socialIcons.github}`}></i>
                            </span>
                            <span className="normal-text">
                                {socialRefers.github}
                            </span>
                            </a>                   

                           <a className="social-account" target="_blank" rel="noopener noreferrer" href={socialHref.twitter}>
                            <span className="social-icon">
                            <i class={`${socialIcons.twitter}`}></i>
                            </span>
                            <span className="normal-text">
                                {socialRefers.twitter}
                            </span>
                            </a>                   
                            <a className="social-account" target="_blank" rel="noopener noreferrer" href={socialHref.email}>
                            <span className="social-icon">
                            <i class={`${socialIcons.email}`}></i>
                            </span>
                            <span className="normal-text">
                                {socialRefers.email}
                            </span>
                            </a>                   
                               
                    </div>
                   
                   <span className="crafted-text">
                   Crafted with <span style ={{marginRight:'5px'}}> ❤️ </span>by Deepak Suthar
                   </span>
                    </div>

      
        </BrowserView>
    )
};

export default LandingPage;