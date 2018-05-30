import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import tours from '../assets/tours'
import '../styles/components/Tours.css'

const Tours = (props) => {
  return (
    <ul id="tourlist">
      {tours.map(tour => {
        return <li>
          <div id="tourwrapper">
            <Card id="tourcard">
              <CardImg top width="100%" src={tour.imgUrl} alt="Card image cap" />
              <CardBody>
                <CardTitle>{tour.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button id="tourbutton">Let's Go!</Button>
              </CardBody>
            </Card>
          </div>
        </li>
      })}
    </ul>
  )
}

export default Tours
