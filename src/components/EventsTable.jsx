import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Emoji from './Emoji';
import HistoryTab from './HistoryTab';
import AdminTab from './AdminTab';

// =======================================
// From Mike's TIPs
// =======================================
// import {useState,useEffect} from 'react';
// import MaterialTable from 'material-table';
// import axios from 'axios';
// import Moment from 'react-moment';

// let url = ""; 
// axios.get (url)
//   .then(res => 
//     set);

const data =[
  {
    "_id" : "6069e9b05c686e13d854155a",
    "socket" : "1e-tjq8SG9p0iE18AAAA",
    "type" : "Disconnect",
    "eventTime" : "2021-04-04T16:30:40.706Z",
    "__v" : 0
  },
  {
    "_id" : "6069e9b05c686e13d854155b",
    "socket" : "EKJ-aWO-lPXws4HhAAAB",
    "type" : "Connected",
    "eventTime" : "2021-04-04T16:30:40.733Z",
    "__v" : 0
  },
  {
    "_id" : "6069e9b65c686e13d854155c",
    "socket" : "J8Q9_Qp5ciPzmLTnAAAC",
    "type" : "Connected",
    "eventTime" : "2021-04-04T16:30:46.825Z",
    "__v" : 0
  },
  {
    "_id" : "6069e9b95c686e13d854155d",
    "socket" : "FbenhjAr_J9zxcLAAAAD",
    "type" : "Connected",
    "eventTime" : "2021-04-04T16:30:49.193Z",
    "__v" : 0
  },
  {
    "_id" : "6069e9bb5c686e13d854155e",
    "socket" : "fcikCk85J2nXLIL8AAAE",
    "type" : "Connected",
    "eventTime" : "2021-04-04T16:30:51.138Z",
    "__v" : 0
  },
  {
    "_id" : "6069e9bd5c686e13d854155f",
    "socket" : "xGep3rygHSLcquDHAAAF",
    "type" : "Connected",
    "eventTime" : "2021-04-04T16:30:53.260Z",
    "__v" : 0
  }
];


const listEvents = data.map((event) =>
  <tr key={event._id}>
    <td>{event._id}</td>
    <td>{event.socket}</td>
    <td>{event.type}</td>
    <td>{event.eventTime}</td>
  </tr>
);

const EventsTable = () => {
  return(
  <div name="Events History Table" Style="margin: 7em;">
    <AdminTab />
    <HistoryTab selectProp="event" />
    <Card>
        <Card.Body>
          <h3 Style="text-align:left;"><Emoji symbol="🔌"/> Events History Table</h3>
        </Card.Body>
    </Card>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Socket</th>
          <th>Type</th>
          <th>Date/Time</th>
          {/* <th>User</th><th>PPID</th> */}
        </tr>
      </thead>
      <tbody>
        {listEvents}
      </tbody>
    </Table>
  </div>
  );
}

export default EventsTable;