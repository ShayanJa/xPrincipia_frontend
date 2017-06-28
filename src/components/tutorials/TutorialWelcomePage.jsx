import React from 'react';
import { Link  } from 'react-router';

export default class TutorialWelcomePage extends React.Component {
   render() {
      return (
        <div>
            {this.props.children}
        </div>
      );
   }
}
