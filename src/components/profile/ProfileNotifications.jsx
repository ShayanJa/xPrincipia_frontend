import React from 'react';
import {Link} from 'react-router'

export default class ProfileNotifications extends React.Component {
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
          <Link key={item.ID} to={`/fullsolution/${item.ProblemID}/${item.ID}/solutions`} >
            <li><div id="profileRightUnit">
                <div id="profileUnitTitle">
                    Test Title
                    {/*{item.Title}*/}
                </div>
                <div id="unitSummary">
                    Test Summary
                    {/*{item.Summary}*/}
                </div>
            </div></li>
          </Link>
      );
       }
      else if (this.props.currentType === 'problem') {
        return (
          <Link key={item.ID} to={`/problem/${item.ID}/solutions`} >
            <li><div id="profileRightUnit">
                <div id="profileUnitTitle">
                    Test Title
                    {/*{item.Title}*/}
                </div>
                <div id="unitSummary">
                    Test Summary
                    {/*{item.Summary} */}
                </div>
            </div></li>
          </Link>
      );
       }
   }
}
