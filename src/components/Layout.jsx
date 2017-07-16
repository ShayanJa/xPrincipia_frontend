import React from 'react';
import Footer from '../containers/Footer.jsx';
import Header from '../containers/Header.jsx';


export default class Layout extends React.Component {
   render() {
      return (
      	<div>
      		<Header />
        	<div id="main">
          		{this.props.children}
        	</div>
          {/*Commenting out footer until I figure out how to get it to stay at the bottom*/}
           <Footer />
        </div>
      );
   }
}