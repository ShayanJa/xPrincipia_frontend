import React from 'react';
import ReactDOM from 'react-dom';
import SubProblemUnit from './SubProblemUnit.jsx';

export default class SubProblemContainer extends React.Component {
   render() {
      return (
        <div>
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
        </div>
      );
   }
}
