import React from 'react';
import ReactDOM from 'react-dom';

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
            <a href="http://www.xprincipia.com/create">
                <button type="button" id="createButton">Create</button></a>
        </div>
      );
   }
}

