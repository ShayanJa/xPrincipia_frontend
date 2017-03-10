import React from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './Suggestion.jsx';

export default class SuggestionContainer extends React.Component {
   render() {
      return (
        <div id="commentSection">
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </div>
      );
   }
}
