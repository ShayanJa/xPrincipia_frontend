import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

export default class LearnContentMenu extends React.Component {
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
            <div id="intensityHeader">
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/1`} activeClassName="activeWhite">
                        Easy
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/2`} activeClassName="activeWhite">
                        Medium
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/3`} activeClassName="activeWhite">
                        Hard
                    </Link>
                </div>
            </div>
            {this.props.children}
        </div>

      );
   }
}