import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionUnit from './SuggestionUnit.jsx';

export default class SuggestionContainer extends React.Component {
   render() {
      return (
        <div id="suggestionContainer">
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
        </div>
      );
   }
}
