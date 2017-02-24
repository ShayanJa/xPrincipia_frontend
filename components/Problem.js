import React from 'react';
import ReactDOM from 'react-dom';

export default class Problem extends React.Component {
   render() {
      return (
		<div id="problem">
            <h3 id="parent">Parent: <i>Arbitrary Problem Name</i></h3>
            <h1 id="problemLabel">Problem</h1>
            <h1 id="problemTitle">Arbitrary Problem Title?</h1>
            <p id="problemSummary">Problem Summary</p>
            <ol id="problemRequirements">
                <li>Arbitrary Requirement.</li> //Need to write a loop that checks how many requirements there are (upto a certain amount) then adds them one by one
                <li>Arbitrary Requirement 2 </li>
                <li>Arbitrary Requirement 3.</li>
                </ol>
                <br />
                <h2>Relevant Fields</h2>
                <ul id="tags">
                    <li>Relevant Field</li> //Nee to write a loop that checks how many relevant fields that are (upto a certain amount) then adds them one by one
                    <li>Relevant Field</li>
                    <li>Relevant Field</li>
                    <li>Relevant Field</li>
                    <li>Relevant Field</li>
                </ul>
        </div>
      );
   }
}
