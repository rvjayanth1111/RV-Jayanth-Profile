import React, { component } from 'react';
import './about.css';



class About extends React.Component {
   render() {
      return (
      	<div>
			<div className="container animation">
				<div className="row">
			    	<div>
			        	<div className="section-title">
			            	About me
			            </div>
			        </div>
			        <div className="section-text-block">
			        	<div className="section-text" style={{position:'relative'}}>
			            	<Comment 
			            		text= {comment.text}
			            	/>
			            	<Button />
		                </div>
			        </div>
			    </div>
			</div>
		</div>
		);
	}
}

function Comment(props) {
	return(
		<div>
			{props.text}
		</div>
	);
}

const comment = {
	text: ' I am currently pursuing my B.Tech in CSE from Amrita Vishwa Vidyapeetham, Chennai.' +
		' Work for an organization which provides me the opportunity to improve my skills and deliver my best to meet the demands of the organization in a disciplined manner.'
};

function Button(props) {
	return(
		<div>
		<div className="btn-block">
    		<a href={"https://rvjayanth1111.github.io/resume/"} target="_blank" className="btn-filled">My resume</a>
    	</div>
			<div className={"hobbies"} >HOBBIES</div>
			<div className="about__subSection">
				<ul>
					<li className='about__subSectionitem'>Reading</li>
					<li className='about__subSectionitem'>Gaming</li>
					<li className='about__subSectionitem'>Music</li>
					<li className='about__subSectionitem'>Hiking</li>
				</ul>
			</div>
		</div>



	);


}

export default About;