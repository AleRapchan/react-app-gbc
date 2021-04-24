import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import AdminTab from './AdminTab';
import Emoji from './Emoji';




class LoginForm extends React.Component {
  
  constructor(props){
    super(props);

    this.inputPassword = React.createRef();

    this.state=({ 
      inputEmail: '' ,
      inputPassword: '' 
    });


    this.formUpdate = this.formUpdate.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  // componentDidMount(){
  //   this.inputPassword.current.focusTextInput();
  // }

  formUpdate (event){

    event.preventDefault();
    this.setState({input: event.target.event});
  
      // let email = this.email.value ;
      // let password = this.password.value ;
  
      // console.log(email);
      // console.log(password);
  }

  formSubmit (event){

    event.preventDefault();

    this.setState({inputName: event.target.event});
    this.setState({inputPassword: event.target.event});
    
  
      // let email = this.email.value ;
      // let password = this.password.value ;
  
      // console.log(email);
      // console.log(password);
  }
  
  render(){
    return(
      <div name="Login Form" width="70%" Style="text-align:left;margin: 7em;">
        <AdminTab />
        <Card>
          <Card.Body><h3><Emoji symbol="👨‍💻"/> Login</h3></Card.Body>
        </Card>
        <Card>
          <Form Style="text-align:left;margin: 7em;">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login:</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"  
                value={this.state.input}
                onChange={this.formUpdate}
                />
              {/* value="{this.email}" */}
              <Form.Text className="text-muted">
                Use your Email address.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={this.inputPassword}/> 
              {/* value="{this.password}" */}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me." />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={ (e) => this.handleOnClick() }>
            {/* () => this.handleOnClick() */}
              Login
            </Button>
          </Form>
        </Card>
      </div>
    )
  };
}

export default LoginForm;