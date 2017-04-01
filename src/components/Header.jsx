import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

export default class Header extends React.Component {
   render() {
      return (
      <div id="headerSection">
        <div id="header">
            <div id="explore">
                <form action="http://www.xprincipia.com/search.php" method="get" id="exploreFormHeader">
                    <input type="search" name="search"
                        placeholder="Explore" id="exploreInput" autofocus/>
                    <input type="submit" value="Go" id="submitExplore" />
                </form>
            </div>
            <div id="logo">
              <Link to="/welcome"><div>XPrincipia</div></Link>
            </div>
            <div id="avatarHeader">
              <Link to="/profile"><img src="../assets/img/dnablackinvert.png" id="img-rounded" id="avatarButton" width="33" height="33" /></Link>
            </div>
        </div>
      </div>
      );
   }
}
