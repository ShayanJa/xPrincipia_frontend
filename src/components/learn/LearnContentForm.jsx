import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import SideBarMore from '../SideBarMore.jsx';


export default class LearnContentForm extends React.Component {
constructor(props){
        super(props);

        this.state = {
            learnItem: []
        }
            this.postLearnItem = this.postLearnItem.bind(this);
        
    };
    postLearnItem() {
  //Read field items into component state
      this.state.learnItem = document.getElementById('learnContentTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
      axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/learnItems/create', {
      type:'0',
      typeID: this.props.params.probID,
      username: cookie.load('userName'),
      description : this.state.learnItem,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request.")
      });
    }

    // componentDidMount(){
    //     var self = this;
    //         return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/learnItems/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
    //             self.setState({
    //                 learnItems: response.data
    //             })
    //         }) 
    //     }
   render() {
           return (
        <div>
            <div id="suggestionFormComponent">
                <form id="suggestionForm">
                    <fieldset>
                        <legend>Create Content</legend>
                             {/*<div>
                                <input type="radio" id="option-one" />
                                    <label>Easy</label>
                                <input type="radio" id="option-two" />
                                    <label>Medium</label>
                                <input type="radio" id="option-three" />
                                    <label>Hard</label>
                             </div>*/}
                            <textarea name="suggestionText" required="required" id="learnContentTextArea" autoFocus ></textarea>
                            <br />
                            <input type="button" value="Create" onClick={this.postLearnItem} id="addSuggestion"/>
                    </fieldset>
                </form>
            </div>
        </div>
      );
    }  
}
