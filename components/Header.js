import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
   render() {
      return (
		<div id="header">
        	<ul>
           		<li id="explore">Explore</li>
            	<li id="logo">XPrincipia</li>
            	<li id="create">Create</li>
       		</ul>
    	</div>
      );
   }
}

