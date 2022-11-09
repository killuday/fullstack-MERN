import React  from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';//!The connect() function connects a React component to a Redux store.
import * as actions from "../actions";
import Landing from './Landing';

import Header from './Header';
import { Component } from 'react';
const Dashboard =()=> <h2>Dashboard</h2>
const SurveyNew =()=> <h2>SurveyNew</h2>



class App extends Component{
  componentDidMount(){
    this.props.fetchUser();

  }

  render(){
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>

    </div>
  );
  }
}

export default connect(null, actions) (App);
