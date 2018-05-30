import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import '../styles/components/Sidebar.css'
import image from '../assets/images'
import { Link } from 'react-router-dom'

const Sidebar = ({ business }) => (
  <div>
    <CardBody id="cardBody">
      <CardImg
        id="cardImage"
        src={
          business.Primary_Image_Url != undefined
            ? business.Primary_Image_Url
            : 'http://via.placeholder.com/300'
        }
        alt="Alum Bio Image"
      />
      <CardSubtitle id="alumnusName">
        {business.AlumName === undefined || business.AlumName.length < 1
          ? ''
          : `${business.AlumName} (${business.Degree}, ${business.Class})`}
      </CardSubtitle>
      <CardImg
        id="cardLogo"
        src={
          business.Logo_Url != undefined
            ? business.Logo_Url
            : 'http://www.seriousrequestzaanstad.nl/wp-content/uploads/2016/11/cropped-logo-placeholder-generic.200x200.png'
        }
        alt="Logo"
        width="300px"
      />
      <CardTitle id="businessName">
        {business.BusinessName != undefined ? business.BusinessName : 'Business Name'}
      </CardTitle>
      <a href={business.Url} target="_blank">
        <CardTitle id="cardUrl">{business.Url}</CardTitle>
      </a>
      <CardTitle id="businessDescription">
        {business.Description === undefined || business.Description.length < 1
          ? 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.'
          : business.Description}
      </CardTitle>
      {business.AlumName === '' ? <div></div> : <div id="gobehindbuttonwrapper">
        <Link to={{ pathname: `/behindthescenes/${business._id}` }}>
          <Button
            id="gobehindthescenesbutton"
            class="btn-lg align-items-center"
          >
            Go Behind the Scenes with <br />
            {business.AlumName === undefined ? 'Alum Name' : business.AlumName}
          </Button>
        </Link>
      </div>}
    </CardBody>
  </div>
)

export default Sidebar
