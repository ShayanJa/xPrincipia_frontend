import React from 'react';
import {Link} from 'react-router'

export default class ProfileUnit extends React.Component {
    constructor(props){
        super(props);

        this.renderItem = this.renderItem.bind(this)
    // this.submitVote = this.submitVote.bind(this)
};

	render() {
		return (
	    <div>
			<ul> {this.props.displayItems.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(item) {
       if (this.props.currentType === 'solution') {
      return (
          <Link to={`/fullsolution/${item.ProblemID}/${item.ID}/solutions`} >
          <li key={item.ID}>
    <div id="profileRightUnit">
          <div id="profileUnitTitle">{item.Title}
              
          </div>
          <div id="unitSummary">
              
          </div>
      </div>
      </li></Link>
      );
       }
   }
}
