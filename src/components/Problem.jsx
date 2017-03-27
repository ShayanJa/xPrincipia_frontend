import React from 'react';

import { Link  } from 'react-router';

export default class Problem extends React.Component {
   render() {
      return (
<<<<<<< HEAD

  <div id="problem">

    <div id="problemHeader">
      <button id="parentButton">Parent</button>
      <h1 id="elementLabel">Problem</h1>
    </div>

    <div id="problemIntro">
      <h1 id="problemTitle">What causes the emergent phenomena of consciousness?</h1>
      <div id="followProblem">Follow</div>
      <div id="contributor">Ben Francis</div>
      <div id="createDate">3.10.2017</div>
      <p id="problemSummary">
          The name Amazon is said to arise from a war Francisco de Orellana fought with the Tapuyas and other tribes. The women of the tribe fought alongside the men, as was their custom.[3] Orellana derived the name Amazonas from the Amazons of Greek mythology, described by Herodotus and Diodorus.[3] This is a sentence summarizing it.
      </p>
    </div>

    <div id="problemDescription">
      <p>
          The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.[2]
      </p>
    </div>

    <div id="problemRequirements">
      <h1 id="requirementsLabel">Requirements</h1>
      <p>
          Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
          Provide one future experiment idea for falsification and one for predictive verification
      </p>
    </div>

  </div>
=======

        <Link to="/solution">
        <div id="problem">
            <h1 id="problemLabel">Problem</h1>
            <div className="problemIntro">

                <h1 id="problemTitle">What causes the emergent phenomena of consciousness?</h1>
                    <p id="problemSummary">
                        The name Amazon is said to arise from a war Francisco de Orellana fought with the Tapuyas and other tribes. The women of the tribe fought alongside the men, as was their custom.[3] Orellana derived the name Amazonas from the Amazons of Greek mythology, described by Herodotus and Diodorus.[3]
                    </p>
            </div>
            <div className="problemDescription">

                <p>
The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.[2]
</p>


            </div>

        </div>
        </Link>
>>>>>>> 77a29eba19a533a18978340b7a53f90444511247
      );
   }
}
