import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div id="header">
        <ul>
            <li id="explore">Explore</li>
            <li id="logo">XPrincipia</li>
            <li id="create">Create</li>
        </ul>
    </div>
    <div id="main">
        <div id="problem">
            <h3 id="parent">Parent: <i>Evolving the Mind</i></h3>
            <h1 id="problemLabel">Problem</h1>
            <h1 id="problemTitle">What causes the emergent phenomena of consciousness?</h1>
            <p id="problemSummary">Problem Summary</p>
            <ol id="problemRequirements">
                <li>Explain a model of how consciousness emerges from the human brain.</li>
                <li>Provide predictions for confirming this hypothesis. </li>
                <li>Provide experiments to test these predictions.</li>
                </ol>
                <br />
                <h2>Relevant Fields</h2>
                <ul id="tags">
                    <li>Neuroscience</li>
                    <li>Consciousness</li>
                    <li>Quantum Physics</li>
                    <li>Cellular Biology</li>
                    <li>Biochemistry</li>
                </ul>
        </div>
        <div id="solutions">
             <h1 id="solutionsLabel">Solutions</h1>
             <ol>
                <li>
                <div id="solution1">
                    <h1 class="solutionTitle">Tryptophan Orch OR Model</h1>
                     <p id="solutionSummaryLabel"><i>Summary</i></p>
                    <p class="solutionSummary">
                        This model is derived from Roger Penrose and Stuart Hameroff's Orchestrated Objective Reduction (Orch OR) theory. The brain uses quantum computation due to trypophan pi bonds in neuron microtubules. This avoids a problem based on Godel's Incompleteness Theorem and allows more complex computation. Studying similar quantum actions in the brain and the effects of tryptophan analogs on consciousness could provide further information.
                        </p>
                      <p class="solutionDescription">
                        Case being made:
                        <br />
                        Tryptophan in the brain allows a quantum computational 
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
            </li>
            <li>  
                <div id="solution2">
                    <h1 class="solutionTitle">Solution Title</h1>
                    <p class="solutionSummary">
                        <span><i>Summary</i></span>
                        <br />
                        Simple Summary</p>
                    <p class="solutionDescription">
                        Case being made:
                        <br />
                        <br />
                        Evidence/Logic:
                        <br />
                        <br />
                        Full Description:
                        <br />
                        <br />
                        Predictions/Future Experiments:
                        <br />
                        <br />
                        Conclusion:
                    </p>
                </div>
            </li>
        </ol>
        </div>
    </div>
      </div>
    );
  }
}

export default App;
