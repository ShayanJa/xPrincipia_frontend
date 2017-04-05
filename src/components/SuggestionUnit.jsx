import React from 'react';
import ReactDOM from 'react-dom';

export default class SuggestionUnit extends React.Component {
   render() {
      return (
      <div id="suggestionUnit">
          <div id="suggestionContent">
              <div id="suggestionAdder">Ben Francis</div>
              <div id="suggestionText">You co</div>
          </div>
          <button type="button" id="suggestionVote">Vote</button>
      </div>
      );
   }
}
