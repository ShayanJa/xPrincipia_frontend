import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

export default class Create extends React.Component {
   render() {
      return (
		    <div id="createBox">
          <form action="http://www.xprincipia.com/create.php" method="post" id="createForm">
          <fieldset>
              <legend>Create: Solution</legend>
                <label for="solutiontitle">Title<br />
                    <input type="text" name="solutiontitle" equired="required" maxlength="100"/></label><br />
                <label for="solutionsummary">Summary<br />
                    <input type="text" name="solutionsummary" required="required" maxlength="500" /></label><br />
                <label for="solutiondescription">Description<br />
                    <textarea name="solutiondescription" required="required"></textarea>
                </label><br />
                <label for="solutionevidence">Evidence/Logic<br />
                    <textarea name="solutionevidence"></textarea>
                </label><br />
                 <input type="submit" value="Create" />
        </fieldset>
    </form>
</div>
      );
   }
}
