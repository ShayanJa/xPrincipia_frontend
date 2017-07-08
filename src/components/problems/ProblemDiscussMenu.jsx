import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'
import {Config} from '../../config.js'

export default class ProblemDiscussMenu extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutions: []
        }

    };
        componentDidMount(){
        var self = this;
        window.scrollTo(0,0);
        return axios.get( Config.API + '/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
        <div id="solutions">
            <div id="solutionsTitleRightSB">Discuss</div>
            <div id="sidebarDiscussMenu">
                <div id="discussGroup1">
                    <Link to={`/problem/${this.props.params.probID}/questions`} activeClassName="activeWhite">
                        <div id="SBDiscussButton">Questions</div>
                    </Link>

                    <Link to={`/problem/${this.props.params.probID}/suggestions`} activeClassName="activeWhite">
                        <div id="SBDiscussButton">Suggestions</div>
                    </Link>
                    <Link to={`/problem/${this.props.params.probID}/freeforms`} activeClassName="activeWhite">
                        <div id="SBDiscussButton">FreeForm</div>
                    </Link>
                </div>
            </div>
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>

      );
   }
}