import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import img from '../assets/dnablackinvert.png'

export default class Header extends React.Component {
   render() {
      return (
      <div id="headerSection">
        <div id="header">
            <div id="explore">
                <form action="http://www.xprincipia.com/search.php" method="get" id="exploreFormHeader">
                    <input type="search" name="search"
                        placeholder="Explore" id="exploreInput" autoFocus/>
                    <input type="submit" value="Go" id="submitExplore" />
                </form>
            </div>
            <div id="logo">
              <Link to="/welcome"><div>XPrincipia</div></Link>
            </div>
            <div id="avatarHeader">
              <div id="avatarFullName">Ben Francis</div>
              <Link to="/profile">
              <img src={require('../assets/dnablackinvert.png')} id="avatarImage" width="33" height="33" />
              </Link>
            </div>
        </div>
      </div>
      );
   }
}
