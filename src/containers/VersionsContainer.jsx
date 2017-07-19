import React from 'react';
import {Link} from 'react-router';
import SideBarMore from '../components/SideBarMore.jsx';
import VersionsUnit from '../components/versions/VersionsUnit.jsx';
import axios from 'axios'
import {Config} from '../config.js'

export default class VersionsContainer extends React.Component {
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
      <div> 
          
        <div id="fullVersions">
            <div id="developVersionsHeader">
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}`}>
                    <div id="downArrowDiv">
                        <img src={require('../assets/leftArrowLight.png')} id="backDevelopArrow" width="30" height="50" alt="Back arrow, blue up arrow" />
                    </div>
                </Link>
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/versionform`}>
                    <div id="developVersionsButton">Develop v.112</div>
                </Link>
            </div>
            <VersionsUnit solutions={this.state.solutions} probID={this.props.params.probID} solutionID={this.props.params.solutionID} />
            <SideBarMore />
        </div>
      </div>
      );
   }
}