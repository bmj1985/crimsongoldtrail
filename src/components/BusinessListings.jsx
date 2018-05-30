import React from 'react'
import { Link } from 'react-router-dom'
import businesses from '../assets/businesses'
import '../styles/components/BusinessListings.css'
import WordCloud from 'react-d3-cloud'

const BusinessListing = (props) => {
  return (
    <div id="businessListingWrapper">
      <h2 id="businesslistingstitle">Business Listings</h2>
      <ul id="businesslistings">
        {businesses.map(business => <li class="businessListName">{business}</li>).sort((a, b) => {
          return a.props.children.split(' ')[0].localeCompare(b.props.children.split(' ')[0])
        })}
      </ul>
    </div>
  )
}

export default BusinessListing
