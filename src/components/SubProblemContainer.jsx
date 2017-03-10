import React from 'react';
import ReactDOM from 'react-dom';
import SubProblem from './SubProblem.jsx';

export default class SubProblemContainer extends React.Component {
   render() {
      return (
        <div>
          <SubProblem />
          <SubProblem />
          <SubProblem />
          <SubProblem />
          <SubProblem />
        </div>
      );
   }
}
