import React from 'react';
import ReactDOM from 'react-dom';

export default class Problem extends React.Component {
   render() {
      return (
		<div id="problem">
            <div class="problemIntro">
                <h1 id="problemLabel">Problem</h1>
                <h1 id="problemTitle">Arbitrary Problem Title</h1>
                <p id="problemSummary">Arbitrary Problem Description</p>
            </div>
            <div class="problemDescription">
              <p>Arbitrary Problem Description</p>
            </div>
        </div>
      );
   }
}
