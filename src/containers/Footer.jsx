import React from 'react';
import {  Link  } from 'react-router';
import cookie from 'react-cookie';
import axios from 'axios';
import {Config} from '../config.js'

export default class Header extends React.Component {

   render() {
      return (
        <div>
            <Link to={'profile/about'}>
                <div id="footer">
                    About XPrincipia
                </div>
            </Link>
        </div>
      );
   }
}
