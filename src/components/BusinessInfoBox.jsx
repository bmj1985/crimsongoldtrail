import React, { Component } from 'react'
import "../styles/components/BusinessInfoBox.css";

export default class BusinessInfoBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
                <p id="1">Map goes here</p>
                <h1>Business Name</h1>
                <p>Business Url</p>
                <p>Business Address</p>
                <p>More Busines Info</p>
            </div>
    }
}