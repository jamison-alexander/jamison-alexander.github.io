import React from 'react';
import styled from 'styled-components';
const Styles= styled.div`
text-align: center;
background-color: #282c34;
color: #9FFFCB;
font-size: xx-large;
font-emphasis: bold;


.Summary {
    display: block;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 100px;
    margiin-top: 100px;
    font-size: medium;
    font-emphasis: none;
    
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
export const Bio = (props) => (
    <Styles>
    <h2>Professional Summary</h2>
    <p className="Summary">I am a software developer with a background in IT security and physical chemistry. I recentlty graduate from Georgia Tech with a MS in computer science 
        focused on interactive software and machine learning.  In my career I have worked with a wide range of clients, served as scrum team lead, and developed a log-monitoring solution using the Elastic (ELK) stack and python 
        libraries that ingested an average of 12 million logs weekly. My main interests are software development, machine learning, and IT systems especially when a
        pplied to interdisciplinary problems.</p>
        <h2>Hobbbies</h2>
        <p className="Summay">Outside of technology I enjoy hiking, camping, reading/writing, music, cooking. and beer brewing.</p>
  </Styles>


)