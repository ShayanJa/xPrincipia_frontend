import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateSolution extends React.Component {
   render() {
      return (

      <div id="createSolutionBox">
          <form action="http://www.xprincipia.com/create.php" method="post" id="createForm">
            <fieldset>
                <legend>Solution</legend>
                      <label for="solutionTitle">Title<br />
                          <input type="text" name="solutionTitle" required="required" maxlength="140" autofocus/>
                        </label><br />

                      <label for="solutionSummary">Summary<br />
                          <textarea name="solutionSummary" required="required" maxlength="250" placeholder="Summarize in 140 characters here." id="solutionSummaryForm"/>
                        </label><br />

                      <label for="solutionDescription">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="solutionDescriptionForm">
                          </textarea></label><br />

                      <label for="solutionEvidence">Evidence/Logic<br />
                          <textarea name="solutionEvidence" placeholder="Provide your evidence and logic here." id="solutionEvidenceForm">
                          </textarea></label><br />

                      <label for="futureExperiments">Future Experiments<br />
                          <textarea name="futureExperiments" placeholder="Outline future experiment ideas here." id="futureExperimentsForm">
                          </textarea></label><br />

                      <label for="solutionReferences">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="solutionReferencesForm">
                          </textarea></label><br />

                      <input type="submit" value="Create" id="submitSolution"/>
            </fieldset>
          </form>
      </div>
      );
   }
}
