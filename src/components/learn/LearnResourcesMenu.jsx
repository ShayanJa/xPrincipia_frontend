import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

export default class LearnResourcesMenu extends React.Component {
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
        <div>
            <div id="intensityHeader">
                <Link to={`/problem/${this.props.params.probID}/learn/resources/1`} activeClassName="activeWhite">
                    <div id="intensityNumber">Easy</div>
                </Link>
                <Link to={`/problem/${this.props.params.probID}/learn/resources/2`} activeClassName="activeWhite">
                    <div id="intensityNumber">Medium</div>
                </Link>
                <Link to={`/problem/${this.props.params.probID}/learn/resources/3`} activeClassName="activeWhite">
                    <div id="intensityNumber">Hard</div>
                </Link>
            </div>
            {this.props.children}
        </div>

      );
   }
}