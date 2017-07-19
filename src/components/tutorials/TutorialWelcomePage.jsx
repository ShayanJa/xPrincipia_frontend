import React from 'react';

export default class TutorialWelcomePage extends React.Component {
   render() {
      return (
        <div>
            {this.props.children}
        </div>
      );
   }
}
