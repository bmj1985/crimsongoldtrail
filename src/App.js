import React, { Component } from 'react'
import './styles/Reset.css'
import './App.css'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap'
import GoogleMap from './components/GoogleMap'

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
        <Row>
          <Col>
            <Navbar className="header" />
          </Col>
        </Row>
        <Row>
          <Col>
            <GoogleMap className="map" businesses={this.state.businesses}/>
          </Col>
        </Row>
          
      </div>
    );
  }
}

export default App;
