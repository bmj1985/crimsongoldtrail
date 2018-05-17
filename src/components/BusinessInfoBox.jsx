import React, { Component } from 'react'
import "../styles/components/BusinessInfoBox.css";

export default class BusinessInfoBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
                <p id="behindTheScenesMap">Map goes here</p>
                <h1 id="businessInfoName">Business Name</h1>
                <p id="businessInfoUrl">Business Url</p>
                <p id="businessInfoAddress">Business Address</p>
                <p id="businessInfoPhone">Business Address</p>
            </div>
    }
}