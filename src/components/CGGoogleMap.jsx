import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
import React, { Component } from 'react'
import config from '../config'
import icon from '../assets/images'
import { relative } from 'path'
import BusinessModal from './BusinessModal'
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../styles/components/CGGoogleMap.css'

export class CGGoogleMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      card: false,
      closeAll: false
    }

    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      card: !this.state.card
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      card: !this.state.card
    });
  }

  render () {
    return <div><Map className="Google-Map" businesses={this.props.businesses} google={this.props.google} zoom={11} initialCenter={{ lat: 39.706524, lng: -105.01 }} containerStyle={{height: '84vh', width: '100vw', padding: 0, margin: 0, overflow: 'hidden'}}>
        {this.props.businesses.map(business => {
          return business.Location.map(location => {
            return <Marker onClick={this.toggle} position={{ lat: location.Coordinates[0],
                                        lng: location.Coordinates[1] }}
                          icon={icon.Imgur_Icon} />;
          });
        })}
      </Map><Card id="businessModal" isOpen={this.state.modal} backdrop={false} size="sm"><ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          {/* <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" >Button</Button>
            <Button color="secondary" >Cancel</Button>
          </ModalFooter> */}
          </Card></div>
  }
}

const GoogleMapsApiKey = config.REACT_APP_GOOGLE_MAPS_API_KEY
export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey
})(CGGoogleMap)
