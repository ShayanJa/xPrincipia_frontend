import React from 'react';
import ReactDOM from 'react-dom';

export default class Problem extends React.Component {
   render() {
      return (
<div id="problem">

        <div id="problemHeader">

            <button class="parentButton">Parent</button>

            <h1 id="elementLabel">Problem</h1>

        </div>

        <div class="problemIntro">

            <h1 class="problemTitle">What causes the emergent phenomena of     consciousness?</h1>

            <p class="problemSummary">
                The name Amazon is said to arise from a war Francisco de Orellana fought with the Tapuyas and other tribes. The women of the tribe fought alongside the men, as was their custom.[3] Orellana derived the name Amazonas from the Amazons of Greek mythology, described by Herodotus and Diodorus.[3]
            </p>

        </div>





        <div class="problemDescription">

            <p>
                The Amazon rainforest (Portuguese: Floresta Amazônica or Amazônia; Spanish: Selva Amazónica, Amazonía or usually Amazonia; French: Forêt amazonienne; Dutch: Amazoneregenwoud), also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planet's remaining rainforests,[1] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species.[2]
            </p>

        </div>

        <div class="problemRequirements">
            <h1 id="requirementsLabel">Requirements</h1>

            <ol>
                <li>Relate the functions of the brain to the functions of consciousness (edit this in future)
                </li>

                <li>Provide one future experiment idea for falsification and one for predictive verification</li>
            </ol>
        </div>

        <form action="http://www.xprincipia.com/comment.php" method="post" id="commentProblem">
            <fieldset>
                <legend>Comment</legend>
                     <textarea name="commentproblem" required="required"></textarea>
                     <br />
                     <input type="submit" value="Add" id="addComment"/>
            </fieldset>
        </form>

        <div id="commentSection">
            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>

            </div>




            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>


            </div>




            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>


            </div>

            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>


            </div>

            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>



            </div>

            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>


            </div>
        </div>


</div>
      );
   }
}
