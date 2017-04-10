import React from 'react';

export default class ErrorContainer extends React.Component {
   render() {
      return (
        <div>
            {this.props.children}
        </div>
      );
   }
}