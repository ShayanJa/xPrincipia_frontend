import React from 'react';
import { Link  } from 'react-router';

export default class ProfileDisclaimer extends React.Component {
   render() {
      return (
        <div id="profileAbout">
          <div id="profileAboutBanner">
              <div id="profileAboutTitle">Disclaimer</div>
          <div id="introProse">
              {/*<div id="introSummary">
                 Contribute to scientific progress
              </div>*/}
              <div id="aboutProseDescriptions">
                 
                 XPrincipia does not own any of the content found or posted on the website. 
                 <span id='blue'>All intellectual property created on XPrincipia belongs to the public domain</span>. 
                 The exclusive intellectual property rights of any content created on XPrincipia are expressly waived immediately. 
                 <br />
                 <br />
                XPrincipia is an online open-content collaborative research and development center; 
                a voluntary association of individuals and groups working to contribute to human progress. 
                The structure of XPrincipia allows anyone with an internet connection to contribute their efforts. 
                <br />
                <br />
                At the moment, there is no peer reviewing process of the content. 
                <br />
                <br />
                The information provided here is provided freely and no kind of agreement or contract is 
                created between you and anyone associated with XPrincipia. You are granted a limited license to 
                copy anything from this site; this does not create or imply any contractual or extra contractual 
                liability on the part of XPrincipia or any of its agents, members, organizers or other users.  
                <br />
                <br />
                No one associated with XPrincipia in any way can be responsible for the appearance of any inaccurate 
                or libelous information or for someone’s use of the information contained in or linked from these web 
                pages. There is no agreement or understanding between you and XPrincipia regarding your use or modification 
                of any information found in the website. 
                <br />
                <br />
                Any of the trademarks, service marks, collective marks, design rights or similar rights that are mentioned, 
                used or cited in XPrincipia are the property of their respective owners. Their use here does not imply that 
                they may be used for any purpose other than for the same or a similar informational use as contemplated by the 
                original authors of the content under the CC-BY-SA and GFDL licensing schemes. Unless otherwise stated, XPrincipia is 
                neither endorsed by nor affiliated with any of the holders of any such rights and as such XPrincipia cannot grant any 
                rights to use any otherwise protected materials. Your use of any such or similar incorporeal property is at your own risk.
                <br />
                <br />
                Publication of information found in XPrincipia may be in violation of the laws of the country or jurisdiction from where you
                 are viewing this information. The XPrincpia database is stored on servers in the United States of America, and is maintained in 
                 reference to the protections afforded under local and federal law. Laws in your country or jurisdiction may not protect or allow 
                 the same kinds of speech or distribution. Wikipedia does not encourage the violation of any laws, and cannot be responsible for any 
                 violations of such laws, should you link to this domain or use, reproduce or republish the information contained herein.





                 <br />
                 <br />
                 <br />
                 <br />
                 <span id="blue">Thank you</span>. Contact us for more information at:
                 <br />
                 <br />
                 {/*<span id="aboutBlue">*/}
              </div>
          </div>
            <div id="profileAboutContact">
                info@xprincipia.com
            </div>
            <div id="profileAboutQuote">
                It is the business of the future to be dangerous … The major advances in civilization are processes 
                that all but wreck the societies in which they occur.
                <br />
                <br />
                - A.N. Whitehead
            </div>
        </div>
      </div>
      );
   }
}
