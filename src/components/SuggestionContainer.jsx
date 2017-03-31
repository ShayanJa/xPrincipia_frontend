import React from 'react';
import ReactDOM from 'react-dom';
import SuggestionUnit from './SuggestionUnit.jsx';
import SuggestionForm from './SuggestionForm.jsx';
import SideBarMore from './SideBarMore.jsx';

export default class SuggestionContainer extends React.Component {
   render() {
      return (
        <div id="suggestionContainer">
            <SuggestionForm />
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
            <SuggestionUnit />
            <SideBarMore />
        </div>
      );
   }
}
