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
        return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
        <div id="solutions">
            <div id="solutionsTitleRightSB">Learn</div>
            <div id="solutionsLearnHeader">
                <Link to={`/problem/${this.props.params.probID}/learn/content`} activeClassName="activeWhite">
                    <div id="contentLearnButtonRightSB">Content</div>
                </Link>

                <Link to={`/problem/${this.props.params.probID}/learn/resources`}  activeClassName="activeWhite">
                    <div id="resourcesLearnButtonRightSB">Resources</div>
                </Link>
            </div>

            {React.cloneElement(this.props.children, {probID: this.props.params.probID})}
        </div>

      );
   }
}