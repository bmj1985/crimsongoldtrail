import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles/Reset.css'
import './App.css'
import CGHeader from './components/CGHeader'
import { Container, Row, Col } from 'reactstrap'
import CGGoogleMap from './components/CGGoogleMap'
import CGFooter from './components/CGFooter'
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
        <Row className="header">
          <Col>
            <CGHeader />
          </Col>
        </Row>
        <Row className="map">
          <Col>
            <Switch>
            <Route exact path='/addnewbusiness' component={AddNewBusinessView} />
            <Route exact path="/home" component={() => (<CGGoogleMap businesses={this.state.businesses} />)} /> 
            <Route exact path="/" component={DemoLanding} />
            </Switch>
          </Col>
        </Row>
        <Row className="footer">
          <Col>
            <CGFooter />
          </Col>
        </Row>
        </div>
    );
  }
}

export default App;
