import React from 'react';
import {  Link  } from 'react-router';

export default class Header extends React.Component {

   render() {

    function goToAbout() {
        window.location.href='/profile/about'
    }

    function goToCareers() {
        window.location.href='/profile/careers'
    }     
     
      return (
        <div id="footerWelcome">
            <div id="footerAbout" onClick={goToAbout}>
                About
            </div>
            <div id="footerCareers" onClick={goToCareers}>
                Careers
            </div>
            <div id="creativeCommons">
                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                    <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" id="creativeCommonsLogo" target="_blank" />
                    {/*<br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">XPrincipia</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="www.xprincipia.com" property="cc:attributionName" rel="cc:attributionURL">Ben Francis, Shayan Talebi and Tom Frawley</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="www.xprincipia.com" rel="dct:source">www.xprincipia.com</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="www.xprincipia.com" rel="cc:morePermissions">www.xprincipia.com</a>.*/}
                </a>
            </div>
        </div>
      );
   }
}
