import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/home';
import About from './about/about';
import Skill from './skill/skill';

import Education from './education/education';

import Contact from './contact/contact';


const Main = () => (
  <main style={{marginTop:'60px'}}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/skill" component={Skill}/>

      <Route path="/education" component={Education}/>

      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
)

export default Main;