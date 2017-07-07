import React from 'react';
import {Link} from 'react-router';
import SolutionUnit from '../solutions/SolutionUnit.jsx';
import SideBarMore from '../SideBarMore.jsx';
import axios from 'axios';

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
        return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                solutions: response.data
            })
        })
    }

   render() {
      return (
        <div>
            <SolutionUnit solutions={this.state.solutions} probID={this.props.params.probID}/>
            <SideBarMore />
        </div>

      );
   }
}