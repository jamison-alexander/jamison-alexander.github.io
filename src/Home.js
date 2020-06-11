import React from 'react';
import styled from 'styled-components';
import photo from './profphoto.jpg';
const Styles= styled.div`
text-align: center;
background-color: #282c34;
color: #9FFFCB;
font-size: xx-large;
font-emphasis: bold;


.Home-logo {
    height: 40vmin;
    pointer-events: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
    margiin-top: 100px;
    
  }
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;
export const Home = (props) => (
    <Styles>
         <div className="Spacer"></div>
  <div className="Spacer"></div>
        <img src={photo} className="Home-logo" alt="photo" />
    <h2>Welcome to my personal webpage.</h2>
  </Styles>


)