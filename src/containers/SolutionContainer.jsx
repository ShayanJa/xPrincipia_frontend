import React from 'react';
import {Link} from 'react-router';
import SolutionUnit from '../components/SolutionUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import axios from 'axios'

export default class SolutionContainer extends React.Component {
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
                <Link to={`/problem/${this.props.params.probID}/solution/create`}><div id="topSolutionsButtonRightSB">Top</div></Link>
                <Link to={`/problem/${this.props.params.probID}/solution/create`}><div id="createSolutionsButtonRightSB">Create</div></Link>
            </div>
            <SolutionUnit solutions={this.state.solutions} probID={this.props.params.probID}/>
            <SideBarMore />
        </div>

      );
   }
}
