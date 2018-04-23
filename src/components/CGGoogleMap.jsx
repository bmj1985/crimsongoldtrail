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
      closeAll: false,
      showHideCard: 'hidden'
    }

    // this.showHideCard = this.showHideCard.bind(this)
  }

  toggleSideCard () {
    var css = (this.state.showHideCard === 'hidden') ? 'businessModal' : 'hidden'
    this.setState({'showHideCard': css})
  }

  render () {
    return <div className="mapContainer"><Map className="Google-Map" businesses={this.props.businesses} google={this.props.google} zoom={11} initialCenter={{ lat: 39.706524, lng: -105.01 }} containerStyle={{height: '84vh', width: '100vw', padding: 0, margin: 0, overflow: 'hidden'}}>
      {this.props.businesses.map(business => {
        return business.Location.map(location => {
          return <Marker onClick={this.toggleSideCard.bind(this)} position={{ lat: location.Coordinates[0],
            lng: location.Coordinates[1] }}
          icon={icon.Imgur_Icon} />
        })
      })}
    </Map><Card id={this.state.showHideCard} size="sm"><p>some content</p>
    </Card></div>
  }
}

const GoogleMapsApiKey = config.REACT_APP_GOOGLE_MAPS_API_KEY
export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey
})(CGGoogleMap)
