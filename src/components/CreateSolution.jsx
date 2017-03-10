import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateSolution extends React.Component {
   render() {
      return (

      <div id="createBanner">
          <h1>Create: Solution</h1>
         </div>

      <form action="http://www.xprincipia.com/create.php" method="post" id="createForm">

                  <label for="solutiontitle">Title<br />
                      <input type="text" name="solutiontitle" required="required" maxlength="100" autofocus/></label><br />
                  <label for="solutionsummary">Summary<br />
                      <input type="text" name="solutionsummary" required="required" maxlength="140" placeholder="Summarize in 140 characters here." id="solutionSummaryForm"/></label><br />
                  <label for="solutiondescription">Description<br />
                      <textarea name="solutiondescription" required="required" placeholder="Describe in detail here."/></textarea>
                  </label><br />
                  <label for="solutionevidence">Evidence/Logic<br />
                      <textarea name="solutionevidence" placeholder="Provide your evidence and logic here."/></textarea>
                  <label for="futureexperiments">Future Experiments<br />
                      <textarea name="futureexperiments" placeholder="Outline future experiment ideas here. "/></textarea>
                  <label for="solutioneReferences">References<br />
                      <textarea name="solutionevidence" placeholder="Provide your references here."/></textarea>
                  </label><br />
                      <input type="submit" value="Create" id="submit"/>

      </form>
      );
   }
}
