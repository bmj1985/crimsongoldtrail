import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import '../styles/components/Sidebar.css'
import image from '../assets/images'
const Sidebar = ({ business }) => (
  <div>
    <CardBody id="cardBody">
      <CardImg id="cardImage" top width="100%" src={image.JeffRogoff2} alt="bioImage" />
      <CardImg id="cardLogo" src={image.SazzaLogo} />
      <CardTitle id="businessName">
        {business.BusinessName}
      </CardTitle>
      <CardSubtitle id="alumnusName">{business.AlumName} ({business.Degree}, {business.Class})</CardSubtitle>
      <CardTitle id="business-description">We are sustainable food advocates by nature and embrace a planet-friendly lifestyle.
We share this passion for responsibly grown food through our pizzas, salads, soups, and more.</CardTitle>
      <div id="gobehindbuttonwrapper">
        <Button id="gobehindthescenesbutton" class="btn-lg align-items-center">Go Behind the Scenes with <br></br>{business.AlumName}</Button>
      </div>
    </CardBody>
  </div>
)

export default Sidebar
