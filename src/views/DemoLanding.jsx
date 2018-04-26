import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import '../styles/views/DemoLanding.css'
import colors from '../styles/colors'

export default class Demo extends Component {
  render () {
    return <div id="demowrapper"><Link to="home" id="demo"><Button id="demoButton" color='dark' size="lg">Demo</Button></Link></div>
  }
}
