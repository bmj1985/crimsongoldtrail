import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import '../styles/components/Sidebar.css'
import image from '../assets/images'
import { Link } from 'react-router-dom'

export default class CGFooter extends React.Component {
    constructor(props){
        super(props)
        this.state = ['Beer Tour', 'Food Tour', 'Another Tour', 'Yet Another Tour']
    }
    <div>
        <CardBody id="cardBody">
            <CardImg
                id="cardImage"
                src={}
                alt="Alum Bio Image"
            />
            <CardImg
                id="cardLogo"
                src={}
                alt="Logo"
                width="300px"
            />
            <CardTitle id="businessName">
            </CardTitle>
            <CardSubtitle id="alumnusName">
            </CardSubtitle>
            <CardTitle id="businessDescription">
            </CardTitle>
            <div id="gobehindbuttonwrapper">
                <Link to={{ pathname: `/behindthescenes/${business._id}` }}>
                    <Button
                        id="gobehindthescenesbutton"
                        class="btn-lg align-items-center"
                    >
                    </Button>
                </Link>
            </div>
        </CardBody>
    </div>
);
}
