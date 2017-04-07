import React from 'react';
import { Link } from 'react-router';
import ProblemForm from './ProblemForm.jsx';

export default class WelcomeCreateForm extends React.Component {
   render() {
      return (

      <div>
        <ProblemForm />
        <Link to='/welcome'><div id="welcomeMore">
              Back
        </div></Link>
      </div>

      );
   }
}
