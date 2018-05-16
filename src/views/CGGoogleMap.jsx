import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import React, { Component } from 'react'
import config from '../config'
import images from '../assets/images'
import Sidebar from '../components/Sidebar'
import { Card, Button, Fade } from 'reactstrap'
import '../styles/components/CGGoogleMap.css'

export class CGGoogleMap extends Component {
         constructor(props) {
           super(props);
           this.state = { closeAll: false, showHideCard: "hidden", business: {} };
         }

         toggleSideCard(e) {
           var css = this.state.showHideCard === "hidden" ? "businessModal" : "hidden";
           this.setState({
             showHideCard: css,
             business: e.business.business
           })
         }

         render() {
           if (this.props.nearMe === false) {
             return <div className="mapContainer">
                 <Map className="Google-Map" google={this.props.google} zoom={12} ControlPosition="BOTTOM_LEFT" initialCenter={{ lat: 39.757538, lng: -104.939617 }} containerStyle={{ height: "82vh" }}>
                   {this.props.businesses.map(business => {
                     return business.Location.map(location => {
                       return <Marker id="marker" onClick={this.toggleSideCard.bind(this)} position={{ lat: location.Coordinates[0], lng: location.Coordinates[1] }} icon={images.Imgur_Icon} business={{ business }} />;
                     });
                   })}
                 </Map>
                 <Card id={this.state.showHideCard} size="sm">
                   <Sidebar id="sidebar" business={this.state.business} />
                 </Card>
               </div>;
           } else {
             return <div className="mapContainer">
                 <Map className="Google-Map" google={this.props.google} zoom={14} ControlPosition="BOTTOM_LEFT" initialCenter={{ lat: 39.757538, lng: -104.939617 }} centerAroundCurrentLocation containerStyle={{ height: "82vh" }}>
                   {this.props.businesses.map(business => {
                     return business.Location.map(location => {
                       return <Marker id="marker" onClick={this.toggleSideCard.bind(this)} position={{ lat: location.Coordinates[0], lng: location.Coordinates[1] }} icon={{ url: images.Imgur_Icon }} business={{ business }} />;
                     });
                   })}
                 </Map>
                 <Card id={this.state.showHideCard} size="sm">
                   <Sidebar id="sidebar" business={this.state.business} />
                 </Card>
               </div>;
           }
         }
       }

const GoogleMapsApiKey = config.REACT_APP_GOOGLE_MAPS_API_KEY
export default GoogleApiWrapper({
  apiKey: GoogleMapsApiKey
})(CGGoogleMap)
