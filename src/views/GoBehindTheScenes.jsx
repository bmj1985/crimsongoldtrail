import React, { Component } from 'react'
import '../styles/views/GoBehindTheScenes.css'
import BussinessInfoBox from '../components/BusinessInfoBox'
import BehindTheScenes from '../components/BehindTheScenes'

export class GoBehindTheScenes extends Component {
    constructor(props) {
        super(props)
        const businessId = window.location.pathname.replace("/behindthescenes/", "")
        this.state= {
            business: this.props.businesses.filter(
                business => business._id === businessId
            )[0]
        }
    }

    componentDidMount () {
        console.log(this.state.business)
    }

    render () {
        return <div id="behindTheScenesWrapper">
                    <div id="questionWrapper">
                        <BehindTheScenes business={this.state.business} />
                    </div>
                    <div id="businessInfoBoxWrapper">
                        <BussinessInfoBox business={this.state.business}/>
                    </div>
                </div>
    }
}