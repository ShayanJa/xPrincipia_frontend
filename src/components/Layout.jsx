import React from 'react';
import Header from '../containers/Header.jsx';


export default class Layout extends React.Component {
   render() {
      return (
      	<div>
      		<Header />
        	<div id="main">
          		{this.props.children}
        	</div>
        </div>
      );
   }
}