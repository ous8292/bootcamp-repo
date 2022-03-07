
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, FormGroup, Label, Input, Button  } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios'


function App() {

  const [formData, setFormData] = useState({})


  const handleChange = event => {
    // console.log(event.target.value) 
    // console.log(event.target.name)
    const {value , name} = event.target
    setFormData({
      ...formData, [name]: value
    })
  }
  console.log(formData)


  const onSubmit = event => {
    event.preventDefault()
    axios.post('http://localhost:3001/person', formData)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <div>
    <h1>Main Page</h1>
    <Form onSubmit={onSubmit}>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="fName">
            First Name
          </Label>
          <Input onChange={handleChange}
            id="fName"
            name="fName"
            placeholder="First Name"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="lName">
            Last Name
          </Label>
          <Input onChange={handleChange}
            id="lName"
            name="lName"
            placeholder="Last Name"
            type="lName"
          />
        </FormGroup>
      </Col>
    </Row>
    <Col md={6}>
    <FormGroup>
      <Label for="exampleAddress">
        email address
      </Label>
      <Input onChange={handleChange}
        id="email"
        name="email"
        placeholder="example@example.com"
      />
    </FormGroup>
    </Col>

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="phone">
            Phone Number
          </Label>
          <Input onChange={handleChange}
            id="phone"
            name="phone"
            placeholder="12315123123"
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="message">
            State
          </Label>
          <Input onChange={handleChange}
            id="message"
            name="message"
            placeholder="Message"
          />
        </FormGroup>
      </Col>  
    </Row>
    <Button type='submit'>
      Submit
    </Button>
</Form>
</div>

  );
}

export default App;
