import React from 'react';
import axios from 'axios';
import LearnContentForm2 from '../components/LearnContentForm2.jsx';
import LearnContentUnit2 from '../components/LearnContentUnit2.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class LearnContentContainer1 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            })  
        } else {
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
          {/*Put children thing here, move forms
            unit combos to children routes of this*/}
          <LearnContentForm2 probID={this.props.params.probID}  />
            <LearnContentUnit2 suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>  
      );
    }  
}