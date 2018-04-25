import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import '../styles/components/Sidebar.css'

const Sidebar = ({ business }) => (
  <div>
    <CardImg id="cardImage" top width="100%" src="../assets/jeffrogoff.jpg" alt="bioImage" />
    <CardBody>
      <CardTitle id="businessName">
        {business.BusinessName}
      </CardTitle>
      <CardSubtitle id="alumnusName">Alumnus Name: {business.AlumName}</CardSubtitle>
      <CardText id="businessDesription">{business.Description}</CardText>
      <div id="gobehindbuttonwrapper">
        <Button id="gobehindthescenesbutton" class="btn-lg align-items-center">Go Behind the Scenes with <br></br>{business.AlumName}</Button>
      </div>
    </CardBody>
  </div>
)

export default Sidebar
