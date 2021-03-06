import React, { Component } from 'react';
import './contact.css';

import Address from './contact-address';


class Contact extends React.Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
				            	Contact
			            	</div>
		            	</div>
		            	<div className="col-md-12 section-text-block">
				        	<div className="section-text" style={{position:'relative'}}>
				        		<div className="row">

				        			<div className="col-md-6 mobile-top-space">
				        				<Address />
				        			</div>
				        		</div>
				        	</div>
			        	</div>
					</div>
				</div>
			</div>
		) 
	}
}

export default Contact;