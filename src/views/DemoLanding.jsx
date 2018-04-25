import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/views/DemoLanding.css'
import colors from '../styles/colors'

export default class Demo extends Component {
  render () {
    return <div id="demowrapper"><Button id="demo" color='dark' size="lg"><Link to="home">Demo</Link></Button></div>
  }
}
