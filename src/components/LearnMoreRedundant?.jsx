import React from 'react';
import ReactDOM from 'react-dom';

export default class LearnMore extends React.Component {
   render() {
      return (
<div id="LearnMoreComponent"

    <div id="learnMore">
    	<p>
	    	Wikipedia (Listeni/ˌwɪkᵻˈpiːdiə/ or Listeni/ˌwɪkiˈpiːdiə/
	    	 WIK-i-PEE-dee-ə) is a free online encyclopedia that aims to allow
	    	anyone to edit articles.[3] Wikipedia is the largest and most popular
	    	general reference work on the Internet[4][5][6] and is ranked among the
	    	ten most popular websites.[7] Wikipedia is owned by the nonprofit Wikimedia Foundation
	    	<br>
	    	Wikipedia was launched on January 15, 2001, by Jimmy Wales and Larry Sanger.[11] San
	    	ger coined its name,[12][13] a portmanteau of wiki[notes 4] and encyclopedia. There
	    	was only the English language version initially, but it quickly developed similar versions
	    	in other languages, which differ in content and in editing practices. With 5,353,494 articles,
	    	the English Wikipedia is the largest of the more than 290 Wikipedia encyclopedias. Overall,
	    	Wikipedia consists of more than 40 million articles in more than 250 different languages[15]
	    	and, as of February 2014, it had 18 billion page views and nearly 500 million unique visitors each month.
    	</p>
    </div>

    <div id="otherOptions">

        <a href="./register.html">
            <button type="button" id="registerButton">Register</button>
            </a>

        <a href="./login.html">
            <button type="button" id="loginButton">Login</button>
            </a>
    </div>
</div>
      );
   }
}
