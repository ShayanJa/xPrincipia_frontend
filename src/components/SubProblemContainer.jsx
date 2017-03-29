import React from 'react';
import ReactDOM from 'react-dom';
import SubProblemUnit from './SubProblemUnit.jsx';

export default class SubProblemContainer extends React.Component {
   render() {
      return (
        <div>
          <div id="createButton">Create</div>
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
        </div>
      );
   }
}
