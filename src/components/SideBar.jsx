import React from 'react';
import SideBarMenu from './SideBarMenu.jsx';


export default class SideBar extends React.Component {
   render() {
      return (
          <div>
          	<SideBarMenu />
          	{this.props.children}
          </div>
      );
   }
}
