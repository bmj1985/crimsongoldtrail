import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

const Sidebar = ({ business }) => (
  <div>
    <CardImg top width="90%" src="../assets/jeffrogoff.jpg" alt="bioImage" />
    <CardBody>
      <CardTitle>
        {business.BusinessName}
      </CardTitle>
      <CardSubtitle>Alumnus Name: {business.AlumName}</CardSubtitle>
      <CardText>{business.Description}</CardText>
      <Button>Go Behind the Scenes with {business.AlumName}</Button>
    </CardBody>
  </div>
)

export default Sidebar
