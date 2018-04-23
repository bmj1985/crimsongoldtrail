import React, { Component } from 'react'
import './styles/Reset.css'
import './App.css'
import CGHeader from './components/CGHeader'
import { Container, Row, Col } from 'reactstrap'
import CGGoogleMap from './components/CGGoogleMap'
import CGFooter from './components/CGFooter'

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
            <CGGoogleMap businesses={this.state.businesses}/>
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
