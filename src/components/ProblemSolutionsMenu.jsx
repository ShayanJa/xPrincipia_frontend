import React from 'react';
import {Link} from 'react-router';
import SolutionUnit from '../components/SolutionUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import axios from 'axios'

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
        return axios.get('http://localhost:10000/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
        <div id="solutions">
            <div id="solutionsTitleRightSB">Solutions</div>
            <div id="solutionsHeader">
                <Link to={`/problem/${this.props.params.probID}/solutions`}><div id="topSolutionsButtonRightSB">Top</div></Link>
                <Link to={`/problem/${this.props.params.probID}/solutions/create`}><div id="createSolutionsButtonRightSB">Create</div></Link>
            </div>
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>

      );
   }
}