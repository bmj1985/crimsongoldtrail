import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles/components/AddNewBusiness.css'
import { Link } from 'react-router-dom'

export default class AddNewBusiness extends React.Component {
  render () {
    return (
      <Form id="formwrapper">
        <FormGroup id="col1">
          <FormGroup>
            <Label for="businessName">Business Name</Label>
            <Input type="text" name="businessName" id="businessNameForm" placeholder="ex. Sazza Pizza + Salads" />
          </FormGroup>
          <FormGroup>
            <Label for="alumName">Alumnus Name</Label>
            <Input type="text" name="alumName" id="alumName" placeholder="ex. Duane Michals, Sandra Dallas" />
          </FormGroup>
          <FormGroup>
            <Label for="title">Title at Business</Label>
            <Input type="text" name="titleAtBusiness" id="titleAtBusiness" placeholder="ex. Owner, CEO, etc." />
          </FormGroup>
          <FormGroup>
            <Label for="">Degree</Label>
            <Input type="text" name="" id="" placeholder="ex. B.A., B.S., M.S., etc." />
          </FormGroup>
          <FormGroup>
            <Label for="">Class</Label>
            <Input type="text" name="" id="" placeholder="ex. 1984" />
          </FormGroup>
          <FormGroup>
            <Label for="">Field</Label>
            <Input type="text" name="field" id="fieldForm" placeholder="ex. Chemistry, Business, etc." />
          </FormGroup>
          <FormGroup>
            <Label for="">Business Description</Label>
            <Input type="textarea" name="businessDescriptionForm" id="businessDescripstionForm" placeholder="ex. We are sustainable food advocates by nature and embrace a planet-friendly lifestyle. We share this passion for responsibly grown food through our pizzas, salads, soups, and more." />
          </FormGroup>
          <FormGroup>
            <Label for="">Business Url</Label>
            <Input type="url" name="businessUrl" id="businessUrlForm" placeholder="wwww.yourbusinessname.com" />
          </FormGroup>
        </FormGroup>
        <FormGroup id="col2">
          <FormGroup>
            <Label for="locationName">Location Name</Label>
            <Input type="text" name="locationName" id="locationNameForm" placeholder="ex. Stanley Marketplace" />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="addressForm" placeholder="ex. 1984 George Orwell Dr." />
          </FormGroup>
          <FormGroup>
            <Label for="suite">Suite/Unit Number</Label>
            <Input type="text" name="suite" id="suiteForm" placeholder="#4a" />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="cityForm" placeholder="Denver" />
          </FormGroup>
          <FormGroup>
            <Label for="zipCode">Zip Code</Label>
            <Input type="text" name="zipCode" id="zipCode" placeholder="ex. 80202" />
          </FormGroup>
          <FormGroup>
            <Label for="">Profile Image Url</Label>
            <Input type="url" name="imageUrl" id="imageUrl" placeholder="ex. http://www.domainname.com/image.jpg" />
          </FormGroup>
          <FormGroup id="coordinatesFormGroup">
            <div id="latitudeGroup">
              <Label for="latitude" class="coordinateLabel">Latitude</Label>
              <Input type="number" name="latitude" id="latitudeInput" placeholder="" />
            </div>
            <div id="longitudeGroup">
              <Label for="longitude" class="coordinateLabel">Longitude</Label>
              <Input type="number" name="longitude" id="longitudeInput" placeholder="" />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="">Phone Number</Label>
            <Input type="tel" name="phoneNumber" id="phoneNumberForm" placeholder="ex. 303-999-1984" />
          </FormGroup>
        </FormGroup>
        <Link to="/home" id="submitNewBusiness">
          <Button id="submitNewBusinessButton">Submit</Button>
        </Link>
      </Form>
    )
  }
}
