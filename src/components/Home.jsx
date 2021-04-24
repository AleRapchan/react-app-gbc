import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import AdminTab from './AdminTab';
import Emoji from './Emoji';
import {BrowserRouter, Route, Switch, Link, NavLink}  from 'react-router-dom';

const Home = () => {
  return(
  <div name="Home Page Component" width="70%" Style="text-align:left;margin: 7em;">
    <AdminTab Style="background: ../public/home.jpg" />
    <Card>
      <Card.Body><h3><Emoji symbol="🎵"/> Home Page</h3></Card.Body>
    </Card>
    <Card Style="background-image: url('home.jpg');text-align:center;">
      {/* background-size: 600px; */}
      <Card.Body Style="margin: 7em;">
        {/* <img src="../public/logo.png" ></img> */}
      <h2>Welcome to Music App Dashboard</h2>
      <br/><br/><br/>
        {/* <Button variant="primary" type="submit">
          <NavLink to={'/login'}>Go to Admin Login Form!</NavLink>
        </Button>{' '}
        <Button variant="primary" type="submit">
          <NavLink to={'/downloads'} activeStyle={{ fontWeight: "bold", color: "red" }}>View Download Log as Guest</NavLink>
        </Button>{' '}
        <Button variant="primary" type="submit">
          <NavLink to={'/events'} activeStyle={{fontWeight: "bold", color: "white"}}>View Event Log as Guest</NavLink>
        </Button> */}

        <NavLink to={'/login'}>Go to Admin Login Form</NavLink> 
        {'  |  '}
        <NavLink to={'/downloads'} activeStyle={{ fontWeight: "bold", color: "red" }}>View Download Log as Guest</NavLink>
        {'  |  '}
        <NavLink to={'/events'} activeStyle={{fontWeight: "bold", color: "white"}}>View Event Log as Guest</NavLink>

      </Card.Body>
    </Card>
  </div>
  );
}

export default Home;