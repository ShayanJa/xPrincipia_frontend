import React from 'react';
import {Link} from 'react-router';

export default class ProblemLearnMenu extends React.Component {
        

   render() {
      return (
        <div id="solutions">
            <div id="solutionsTitleRightSB">Learn</div>
            <div id="solutionsLearnHeader">
                <Link to={`/problem/${this.props.params.probID}/learn/content`} activeClassName="activeWhite">
                    <div id="contentLearnButtonRightSB">Lessons</div>
                </Link>

                <Link to={`/problem/${this.props.params.probID}/learn/resources`}  activeClassName="activeWhite">
                    <div id="resourcesLearnButtonRightSB">Resources</div>
                </Link>
            </div>

            {this.props.children}
        </div>

      );
   }
}