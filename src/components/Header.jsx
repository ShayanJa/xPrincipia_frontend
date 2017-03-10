import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

export default class Header extends React.Component {
   render() {
      return (
		    <div id="header">
                <form action="http://www.xprincipia.com/search.php" method="get" id="explore">
                    <input type="search" name="search" 
                        placeholder="Explore" />
                    <input type="submit" value="Go" />
                </form>
            <div id="logo">XPrincipia</div>
            <Link to="">now</Link>
            <button type="button" id="createButton"><Link to="/create">Create</Link></button>
        </div>
      );
   }
}

