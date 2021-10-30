import React, { Component } from 'react';
import './education.css';

class Education extends React.Component {
	render () {
		 return(
            <div>
            	<div className="container">
            		<div className="row  animation">
                              <div className="col-md-12">
                  			<div className="section-title">
      			            	Education & Qualification
      		            	</div>
                              </div>
            		</div>
            	</div>
                  <section style={{backgroundColor:'rgba(0,0,0,0.05)', paddingTop:'16px',paddingBottom:'36px', margin:'36px 0'}}>
                        <div className="container">
                              <div className="row  animation">
                                    <div className="col-md-12">
                                          <div className="section-text-block">
                                                <div style={{display:'inline-block', width:'100%'}}>
                                                      <div className="float year-detail year-detail2" style={{verticalAlign:'top'}}>
                                                            <div className="section-text sec-text-hd">
                                                                  <div className="title-year">
                                                                        B.Tech
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="float exp-details">
                                                            <div className="section-text sec-text">
                                                                  <h2>Bachelor in computer Science and Engineering</h2>
                                                                  <p><span>2019 - 2023</span></p>
                                                                  <p>
                                                                        <span className="ttl">University :</span>
                                                                        Amrita Vishwa Vidyapeetham,Chennai
                                                                  </p>

                                                                  <p>
                                                                        <span className="ttl">Grade :</span>
                                                                        8.5 CGPA
                                                                  </p>
                                                            </div>
                                                            <div style={{width:'60%', height:'2px', backgroundColor:'#9cadb5', marginLeft:'24px', opacity:'0.5'}}></div>
                                                      </div>
                                                </div>

                                                <div style={{display:'inline-block', width:'100%'}}>
                                                      <div className="float year-detail year-detail2" style={{verticalAlign:'top'}}>
                                                            <div className="section-text sec-text-hd">
                                                                  <div className="title-year">
                                                                        12th
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="float exp-details">
                                                            <div className="section-text sec-text">
                                                                  <h2>BOARD OF INTERMEDIATE EDUCATION</h2>
                                                                  <p><span>2017 - 2019</span></p>
                                                                  <p>
                                                                        <span className="ttl">School :</span>
                                                                        Narayana Junior College
                                                                  </p> 
                                                                  <p>
                                                                        <span className="ttl">Grade :</span>
                                                                        100%
                                                                  </p>
                                                            </div>
                                                            <div style={{width:'60%', height:'2px', backgroundColor:'#9cadb5', marginLeft:'24px', opacity:'0.5'}}></div>
                                                      </div>
                                                </div>
                                                <div style={{display:'inline-block', width:'100%'}}>
                                                      <div className="float year-detail year-detail2" style={{verticalAlign:'top'}}>
                                                            <div className="section-text sec-text-hd">
                                                                  <div className="title-year">
                                                                        10th
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="float exp-details">
                                                            <div className="section-text sec-text">
                                                                  <h2>10th</h2>
                                                                  <p><span>2017</span></p>

                                                                  <p>
                                                                        <span className="ttl">School :</span>
                                                                        Sri Chaitanya School
                                                                  </p> 
                                                                  <p>
                                                                        <span className="ttl">Grade :</span>
                                                                        97%
                                                                  </p>
                                                            </div>
                                                            <div style={{width:'60%', height:'2px', backgroundColor:'#9cadb5', marginLeft:'24px', opacity:'0.5'}}></div>
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

export default Education;