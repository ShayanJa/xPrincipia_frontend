import React from 'react';
import ReactDOM from 'react-dom';
import { Link  } from 'react-router';

export default class FullProblem extends React.Component {
   render() {

      return (
      <div>
        <div id="fullProblem">
          <div id="problemHeader">
          <div id="parentButton">Parent</div>
            <h1 id="elementLabel">Problem</h1>
          </div>
          <div id="problemIntro">
            <h1 id="problemTitle">What causes the emergent phenomena of consciousness?</h1>
            <div id="followProblem">Follow</div>
            <div id="contributor">Ben Francis</div>
            <div id="createDate">3.10.2017</div>
            <h1 id="problemSummaryLabel">Summary</h1>
            <p id="problemSummary">
              The name Amazon is said to arise from a war Francisco de Orellana fought with the Tapuyas and other tribes. The women of the tribe fought alongside the men, as was their custom.[3] Orellana derived the name Amazonas from the Amazons of Greek mythology, described by Herodotus and Diodorus.[3] This is a sentence summarizing it.
            </p>
          </div>
          <div>
            <h1 id="problemDescriptionLabel">Description</h1>
            <p id="problemDescription">
              The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.[2]
            </p>
          </div>
          <div>
            <h1 id="problemRequirementsLabel">Requirements</h1>
            <p id="problemRequirements">
              Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
              Provide one future experiment idea for falsification and one for predictive verification
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id="xp">XP</p>
          <br />
        </div>
        <div id="sidebar">
          {this.props.children}
        </div>
      </div>
      );
   }
}
