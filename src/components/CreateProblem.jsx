import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateProblem extends React.Component {
   render() {
      return (
        <div id="createProblemBox">
            <form action="http://www.xprincipia.com/create.php" method="post" id="createForm">
              <fieldset>
                  <legend>Problem</legend>
                        <label for="problemTitle">Title<br />
                            <input type="text" name="problemTitle" required="required" maxlength="140" autofocus/>
                          </label><br />

                        <label for="problemSummary">Summary<br />
                            <textarea name="problemSummary" required="required" maxlength="250" placeholder="Summarize in 140 characters here." id="problemSummaryForm"/>
                          </label><br />

                        <label for="problemDescription">Description<br />
                            <textarea name="problemDescription" required="required" placeholder="Describe in detail here." id="problemDescriptionForm">
                            </textarea></label><br />

                        <label for="problemRequirements">Requirements<br />
                            <textarea name="problemRequirements" placeholder="List requirements that solutions need to fulfill. Please enter as a list with a space between each requirement. " id="problemRequirementsForm">
                            </textarea></label><br />

                        <label for="problemReferences">References<br />
                            <textarea name="problemReferences" placeholder="Provide your references here." id="problemReferencesForm">
                            </textarea></label><br />

                        <input type="submit" value="Create" id="submit"/>
              </fieldset>
            </form>
        </div>
      );
   }
}
