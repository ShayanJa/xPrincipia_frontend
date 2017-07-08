import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'
import {Config} from '../../config.js'

export default class ProblemSolutionsMenu extends React.Component {
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
            <div id="solutionsTitleRightSB">Proposals</div>
            <div id="solutionsHeader">
                <Link to={`/problem/${this.props.params.probID}/solutions/top`} activeClassName="activeWhite"><div id="topSolutionsButtonRightSB">Top</div></Link>
                <Link to={`/problem/${this.props.params.probID}/solutions/create`}  activeClassName="activeWhite"><div id="createSolutionsButtonRightSB">Create</div></Link>
            </div>
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>

      );
   }
}