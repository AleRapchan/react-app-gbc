// REST API service calls must be made with either Fetchor Axios
// JSON result will be bound to the UI on the returnof the API endpoints Download
// History and EventHistory via a GET request.

import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {

  state = {users: []}

  componentDidMount(){    
    this.listStudents();
  }

  listStudents(){
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then(res => {
        const users = res.data;
        // this.setState({users : users}); 
        // As they are equals do the following line
        this.setState({ users });
        //console.log (users);
    });
};