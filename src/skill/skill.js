import React from 'react';
import './skill.css';


class Skill extends React.Component {
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
				    	<div className="col-md-12">
				        	<div className="section-title">
				            	Skills
				            </div>
				        </div>
				    </div>
			    </div>
			    <section style={{paddingTop:'48px', paddingBottom:'48px'}}>
			    	<div className="container animation">
			    		<div className="row">
			    			<div className="col-md-12" style={{marginBottom:'32px'}}>
			    				<h2>Developmet & Programming</h2>
			    			</div>
			    			<div className="col-md-6">
			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">HTML 5</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='70'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '70%'}}>
										    <span className='sr-only'>70% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>

			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">Data Structures</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='65'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '50%'}}>
										    <span className='sr-only'>50% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>
			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">Bootstrap</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='65'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '65%'}}>
										    <span className='sr-only'>65% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>

			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">GIT Code versioning Tool</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='35'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '35%'}}>
										    <span className='sr-only'>35% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>
		    				</div>
			    			<div className="col-md-6">
			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">CSS</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='45'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '45%'}}>
										    <span className='sr-only'>45% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>
								<div className="skill-strength-wrapper">
									<div className="skill-title">Python</div>
									<div className="skill-strength-bar">
										<div className='progress'>
											<div className='progress-bar bar-custom-design'
												 role='progressbar'
												 aria-valuenow='15'
												 aria-valuemin='0'
												 aria-valuemax='100'
												 style={{width: '65%'}}>
												<span className='sr-only'>65% Complete</span>
											</div>
										</div>
									</div>
								</div>

			    				<div className="skill-strength-wrapper">
			    					<div className="skill-title">OOPS</div>
			    					<div className="skill-strength-bar">
		    						    <div className='progress'>
										  <div className='progress-bar bar-custom-design'
										       role='progressbar'
										       aria-valuenow='15'
										       aria-valuemin='0'
										       aria-valuemax='100'
										       style={{width: '15%'}}>
										    <span className='sr-only'>15% Complete</span>
										  </div>
										</div>
			    					</div>
			    				</div>

			    			</div>


						</div>

		    		</div>
			    </section>
			</div>
		);
	}
}

export default Skill;