import React, { Component } from 'react';
import './home.css';

import SocialMediaLink from '../socialMedia/mediaLink';



class Home extends React.Component {
   render() {
      return (

      		<div className={'home'}>
      			<div className="container">
	            	<div className="box" style={{margin:'3% 0'}}>
	                	<div className="row">
	                    	<div className="float text-wrapper animation">
	                        	<div className="tex-box">
	                            	<div className="logo-text">R.V.Jayanth</div>
	                            	<div className="logo-sub-text">Intern</div>
	                            </div>
	                            <div className="intro-text">
	                            	Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for unforgettable IT based companies.	
	                            </div>
	                            <div className="btn-block">
				            		<a href={"https://rvjayanth1111.github.io/resume/"} target="_blank" className="btn-filled">My resume</a>
				            	</div>
	                            <div>
	                            	<SocialMediaLink />
	                            </div>
	                        </div>

	                    </div>
	                </div>
					<div className="my-image">
						<img src={'https://i.ibb.co/rf32mt4/Jayanth.jpg'} alt="My selfie" />
					</div>
	            </div>

      		</div>
      	);
  }
}

export default Home;