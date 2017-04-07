import React from 'react';
import SideBarMenu from './SideBarMenu.jsx';


export default class SideBar extends React.Component {
constructor(props){
        super(props);

    };
   render() {
      return (
          <div>
          	<SideBarMenu probID={this.props.params.probID}/>
          	{this.props.children}
          </div>
      );
   }
}
