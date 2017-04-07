import React from 'react';
import ReactDOM from 'react-dom';

export default class FullSolution extends React.Component {
   render() {
      return (
      <div>
        <div id="fullSolution">
            <div id="solutionHeader">
              <div id="parentButton">Problem</div>
              <h1 id="elementLabel">Solution</h1>
            </div>
            <div id="solutionIntro">
              <h1 id="solutionTitle">What causes the emergent phenomena of consciousness?</h1>
              <div id="voteSolution">Vote</div>
              <div id="contributor">Ben Francis</div>
              <div id="createDate">3.10.2017</div>
              <h1 id="solutionSummaryLabel">Summary</h1>
              <p id="solutionSummary">
                  The name Amazon is said to arise from a war Francisco de Orellana fought with the Tapuyas and other tribes. The women of the tribe fought alongside the men, as was their custom.[3] Orellana derived the name Amazonas from the Amazons of Greek mythology, described by Herodotus and Diodorus.[3] This is a sentence summarizing it.
              </p>
            </div>
            <div>
              <h1 id="solutionDescriptionLabel">Description</h1>
              <p id="solutionDescription">
                  The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.[2]
              </p>
            </div>
            <div>
              <h1 id="evidenceLabel">Evidence</h1>
              <p id="solutionEvidence">
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
              </p>
            </div>
            <div>
              <h1 id="futureExperimentsLabel">Future Experiments</h1>
              <p id="solutionFutureExperiments">
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
              </p>
            </div>
            <div>
              <h1 id="solutionReferencesLabel">References</h1>
              <p id="solutionReferences">
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
              </p>
          </div>
        </div>
        <div id="sidebar">
           {this.props.children}
        </div>
      </div>
      );
   }
}
