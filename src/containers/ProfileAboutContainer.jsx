import React from 'react';
import { Link  } from 'react-router';

export default class ProfileAboutContainer extends React.Component {
   render() {
      return (
        <div id="profileAbout">
          <div id="profileAboutBanner">
              <div id="profileAboutTitle">XPrincipia</div>        
              <div id="aboutMenu">
                <Link to={`/profile/about`} activeClassName="activeDimWhite">
                    <div id="aboutButton">About</div>
                </Link>
                <Link to={`/profile/careers`} activeClassName="activeDimWhite">
                    <div id="careersButton">Careers</div>
                </Link>
              </div>
              <div id="aboutIntroProse">
                {this.props.children}
              </div>
        </div>
      </div>
      );
   }
}
