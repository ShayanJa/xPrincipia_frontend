import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

export default class ProblemLearnMenu extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutions: []
        }

    };
        componentDidMount(){
        var self = this;
        window.scrollTo(0,0);
        return axios.get('http://localhost:10000/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
        <div id="solutions">
            <div id="solutionsTitleRightSB">Learn</div>
            <div id="solutionsHeader">
                <Link to={`/problem/${this.props.params.probID}/learncontent`} activeClassName="activeWhite">
                    <div id="contentLearnButtonRightSB">Content</div>
                </Link>

                <Link to={`/problem/${this.props.params.probID}/learnresources`}  activeClassName="activeWhite">
                    <div id="resourcesLearnButtonRightSB">Resources</div>
                </Link>
            </div>

            {React.cloneElement(this.props.children, {probID: this.props.params.probID})}
        </div>

      );
   }
}