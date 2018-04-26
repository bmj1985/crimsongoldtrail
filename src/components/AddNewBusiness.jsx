import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../styles/components/AddNewBusiness.css'

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
            <Input type="text" name="alumName" id="alumName" placeholder="Jane Doe" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
        </FormGroup>
        <FormGroup id="col2">
          <FormGroup>
            <Label for="businessName">Business Name</Label>
            <Input type="text" name="businessName" id="" placeholder="Your business name, ex. Sazza Pizza + Salads" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="">Label</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
        </FormGroup>
        {/* <div id="submitNewBusinessWrapper"> */}
        <div id="submitNewBusiness">
          <Button id="submitNewBusinessButton">Submit</Button>
        </div>
        {/* </div> */}
      </Form>
    )
  }
}
