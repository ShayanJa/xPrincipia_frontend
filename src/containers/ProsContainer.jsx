import React from 'react';
import axios from 'axios';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ProsForm from '../components/proscons/ProsForm.jsx';
import ProsUnit from '../components/proscons/ProsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class ProsContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            pros: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get( Config.API + '/auth/pros/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    pros: response.data
                })
                self.props.pros.ProblemID = self.props.params.probID
            })  
        } else {
            return axios.get( Config.API + '/auth/pros/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    pros: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
        {/*<ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>*/}
          {this.props.children}
            <ProsUnit pros={this.state.pros} />
            <SideBarMore />
        {/*</ReactCSSTransitionGroup>*/}
        </div>    
      );
   }
}