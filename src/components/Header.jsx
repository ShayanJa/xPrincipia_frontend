import React from 'react';
import { Link } from 'react-router';

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
            <button type="button" id="createButton"><Link to="/create">Create</Link></button>
        </div>
      );
   }
}
