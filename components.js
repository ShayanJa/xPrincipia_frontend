import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
   render() {
      return (
		<div id="header">
        	<ul>
           		<li id="explore">Explore</li>
            	<li id="logo">XPrincipia</li>
            	<li id="create">Create</li>
       		</ul>
    	</div>
      );
   }
}

class Problem extends React.Component {
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

class Solution extends React.Component {
	render() {
		return (
			<div id="solution1">
                <h1 class="solutionTitle">Tryptophan Orch OR Model</h1>
                <p id="solutionSummaryLabel"><i>Summary</i></p>
                <p class="solutionSummary"> This model is derived from Roger Penrose and Stuart Hameroff's Orchestrated Objective Reduction (Orch OR) theory. The brain uses quantum computation due to trypophan pi bonds in neuron microtubules. This avoids a problem based on Godel's Incompleteness Theorem and allows more complex computation. Studying similar quantum actions in the brain and the effects of tryptophan analogs on consciousness could provide further information.</p>
                <p class="solutionDescription">
                    Case being made:
                    <br />
                    <p id="solutionCase">Tryptophan in the brain allows a quantum computational</p>
                    <br />
                    Evidence/Logic:
                    <br />
                    <ul>
                        <li>Quantum Mechanical Effects</li>
                        <li></li>
                    </ul>
                    <br />
                    Full Description:
                    <br />
                    <br />
                    Predictions/Future Experiments:
                    <br />
                    <ul>
                        <li>It is noted that </li>
                        <li></li>
                    </ul>
                    <br />
                    Sub-Problems
                    <ul>
                        <li>A theoretical model that can adepquately describe the effects of certain tryptophan analogs, namely: DMT, LSD, and Psilocybin. </li>
                        <li>Sub Problem 2</li>
                    </ul>
                    <br />
                    <br />
                    Conclusion:
                    </p>
                </div>
		);
	}
}