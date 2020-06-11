import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
  .List {
    background-color: #282c34;
    color: white;
    font-size: calc(3px + 2vmin);
  }
  .Spacer {
    background-color: #282c34;
  }
`; 
export const Resume = () => (
  <GridWrapper>
  <div className="Spacer"></div>
  <div className="Spacer"></div>
    <h2>Languages</h2>
    <div className="List">
    <ul>Java</ul>
    <ul>Python</ul>
    <ul>SQL</ul>
    </div>
    <div className="Spacer"></div>
  <div className="Spacer"></div>
  <h2>Tools</h2>
  <div className="List">
    <ul>Linux</ul>
    <ul>Docker</ul>
    <ul>Git</ul>
    <ul>ELK Stack</ul>
  </div>
  <div className="Spacer"></div>
  <div className="Spacer"></div>
  <h2>Skills</h2>
  <div className="List">
    <ul>Writing</ul>
    <ul>Information Security</ul>
    <ul>Other Skills</ul>
  </div>
  <div className="Spacer"></div>
  <div className="Spacer"></div>
  <h2>Certifications/Education</h2>
  <div className="List">
  <ul>CISSP</ul>
      <ul>MS in Computer Science - Georgia Institute of Technology</ul>
      <ul>MS in Chemistry - University of Utah</ul>
      <ul>BS in Biochemistry - Adams State University</ul>
    </div>
  </GridWrapper>
)