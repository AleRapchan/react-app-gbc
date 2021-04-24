import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import AdminTab from './AdminTab';
import Emoji from './Emoji';

const Error = () => {
  return(
  <div name="Login Form" width="70%" Style="text-align:left;margin: 7em;">
    <AdminTab />
    {/* <Card>
      <Card.Body><h3><Emoji symbol="😤"/> Error !!! </h3></Card.Body>
    </Card> */}
    <Card Style="text-align:center;margin: 7em;">
      <Card.Body>
      <br/><br/><br/>
      <h1> You found an error! <Emoji symbol="🤷‍♂️"/></h1>
      <br/><br/><br/>
        <Button variant="primary" type="submit">
          Return to Home Page
        </Button>
        </Card.Body>
        <br/><br/><br/>
    </Card>
  </div>
  );
}

export default Error;