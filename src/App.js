import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css' 
import CGHeader from './components/CGHeader'
import CGFooter from './components/CGFooter'
import { Container } from 'reactstrap'
import CGGoogleMap from './views/CGGoogleMap'
import AddNewBusinessView from './views/AddNewBusinessView'
import DemoLanding from './views/DemoLanding'

const api_Url =
  'https://crimsonandgoldtrail.herokuapp.com/api/alpha/businesses'

class App extends Component {
  state = { businesses: [] };

  componentDidMount() {
    this.getBusinesses();
  }

  getBusinesses = () => {
    return fetch(api_Url)
      .then(response => response.json())
      .then(businesses => this.setState({ businesses }));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div>
            <CGHeader />
          </div>
        </div>
        <div className="main" businesses={this.state.businesses}>
          <div>
            <Switch>
            <Route exact path='/addnewbusiness' component={AddNewBusinessView} />
            <Route exact path="/home" component={() => (<CGGoogleMap businesses={this.state.businesses} />)} /> 
            <Route exact path="/" component={DemoLanding} />
            </Switch>
          </div>
        </div>
        <div className="footer">
          <div>
            <CGFooter />
          </div>
        </div>
        </div>
    );
  }
}

export default App;
