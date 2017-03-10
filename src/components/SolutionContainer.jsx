import React from 'react';
import ReactDOM from 'react-dom';
import Solution from './Solution.jsx';

export default class SolutionContainer extends React.Component {
   render() {
      return (
        <div id="solutions">
          <h1 id="solutionsLabel">Top Solutions</h1>
          <Solution />
          <Solution />
          <Solution />
          <Solution />
          <Solution />
        </div>
      );
   }
}
