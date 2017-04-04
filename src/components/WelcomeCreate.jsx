import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import CreateProblem from './CreateProblem.jsx';

export default class WelcomeCreate extends React.Component {
   render() {
      return (

      <div>
        <CreateProblem />
        <Link to='/welcome'><div id="welcomeMore">
              Back
        </div></Link>
      </div>

      );
   }
}
