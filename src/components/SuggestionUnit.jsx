import React from 'react';
import ReactDOM from 'react-dom';

export default class SuggestionUnit extends React.Component {
   render() {
      return (
      <div id="suggestionUnit">
          <div id="suggestionContent">
              <div id="suggestionAdder">Ben Francis</div>
              <div id="suggestionText">You could add the fact that entropy is actually increased through abiogenesis through some sort of teleology. Also it could be noted the history of complexity increase in the universe is the dependent variable of a parabolic curve where entropy always increases as the independent variable.</div>
          </div>
          <button type="button" id="suggestionVote">Vote</button>
      </div>
      );
   }
}
