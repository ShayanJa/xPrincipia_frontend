import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import SubProblemUnit from './SubProblemUnit.jsx';
import SideBarMore from './SideBarMore.jsx';

export default class SubProblemContainer extends React.Component {
   render() {
      return (
        <div>
          <Link to="createproblem"><div id="createButton">Create</div></Link>
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SubProblemUnit />
          <SideBarMore />
        </div>
      );
   }
}
