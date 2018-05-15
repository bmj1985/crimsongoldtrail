import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css' 
import CGHeader from './components/CGHeader'
import CGFooter from './components/CGFooter'
import { Container } from 'reactstrap'
import CGGoogleMap from './views/CGGoogleMap'
import AddNewBusinessView from './views/AddNewBusinessView'
import DemoLanding from './views/DemoLanding'
import { BehindTheScenes } from './views/BehindTheScenes'

const api_Url =
  'https://crimsonandgoldtrail.herokuapp.com/api/alpha/businesses'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      nearMe: false
    }

  this.toggleNearMe=this.toggleNearMe.bind(this)
  }

  componentDidMount() {
    this.getBusinesses();
  }

  getBusinesses = () => {
    return fetch(api_Url)
      .then(response => response.json())
      .then(businesses => this.setState({ businesses }));
  };

  toggleNearMe(e) {
    e.preventDefault()
    this.setState({
      nearMe: !this.state.nearMe
    });
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
          <div class="mainwrapper">
            <Switch>
              <Route
                exact
                path="/addnewbusiness"
                component={AddNewBusinessView}
              />
              <Route
                exact
                path="/home"
                component={() => (
                  <CGGoogleMap businesses={this.state.businesses} nearMe={this.state.nearMe} />
                )}
              />
              <Route exact path="/" component={DemoLanding} />
              <Route
                exact
                path="/behindthescenes/:id"
                component={BehindTheScenes}
              />
            </Switch>
          </div>
        </div>
        <div className="footer">
          <div>
            <CGFooter toggleNearMe={this.toggleNearMe}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
