import React from 'react';
import ReactDOM from 'react-dom';

export default class Register extends React.Component {
   render() {
      return (

<div id="registerComponent">

    <div id="logoBanner">
        <div id="bannerTitle">XPrincipia</div>

        <div id="bannerSlogan">Open Source Science</div>
    </div>


    <form action="http://www.xprincipia.com/register.php" method="post" id="registerForm">

        <input type="text" name="firstname" required="required" maxlength="30" placeholder="First Name" autofocus/> <br />

		<input type="text" name="lastname" required="required" maxlength="30" placeholder="Last Name"/> <br />

        <input type="email" name="email" required="required" maxlength="30" placeholder="Email"/> <br />

        <input type="password" name="password" required="required" maxlength="30" placeholder="Password"/>

        <input type="submit" value="Register" id="submit"/>
    </form>


    <div id="otherOptions">

        <a href="./login.html">
            <button type="button" id="loginButton">Login</button>
            </a>

        <a href="./learnmore.html">
            <button type="button" id="learnMoreButton">Learn More</button>
            </a>
    </div>

</div>
   }
}
