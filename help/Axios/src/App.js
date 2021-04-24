import React, { Component } from 'react';
import StudentList from './components/StudentList';

class App extends Component {
  
  render(){
    return (
      <>
      <h1> Students App</h1>
        <StudentList/>
      </>
    );
  }
}

export default App;