import React from 'react';

export default class Create extends React.Component {
   render() {
      return (
		    <div id="createBox">
          <form action="http://www.xprincipia.com/create.php" method="post" id="createForm">
          <fieldset>
              <legend>Create: Solution</legend>
                <label htmlFor="solutiontitle">Title<br />
                    <input type="text" name="solutiontitle" required="required" /></label><br />
                <label htmlFor="solutionsummary">Summary<br />
                    <input type="text" name="solutionsummary" required="required"  /></label><br />
                <label htmlFor="solutiondescription">Description<br />
                    <textarea name="solutiondescription" required="required"></textarea>
                </label><br />
                <label htmlFor="solutionevidence">Evidence/Logic<br />
                    <textarea name="solutionevidence"></textarea>
                </label><br />
                 <input type="submit" value="Create" />
        </fieldset>
    </form>
</div>
      );
   }
}
