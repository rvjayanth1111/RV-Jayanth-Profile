import React from 'react';
import './mediaLink.css';


class SocialMediaLink extends React.Component{
	render() {
		return(
			<div className="social-media-block">
	        	<ul>

	            	<li>
	                    <a href="https://www.linkedin.com/in/jayanth-raavi-547b701a6" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-linkedin"></i></span>
	                    </a>
	                </li>
	            	<li>
	                    <a href="https://github.com/rvjayanth1111" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-github"></i></span>
	                    </a>
	                </li>
	            	<li>
	                    <a href="https://www.instagram.com/vj_r__31/" target="_blank">
	                    	<span className="icon media-icon"><i className="fa fa-instagram"></i></span>
	                    </a>
	                </li>
	            </ul>
	        </div>
		);
	}
}

export default SocialMediaLink;