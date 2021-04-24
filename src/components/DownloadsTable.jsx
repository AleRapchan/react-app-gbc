import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Emoji from './Emoji';
import HistoryTab from './HistoryTab';
import AdminTab from './AdminTab';

// Handling Data
    // -  REST API service calls must be made with either Fetch or Axios
    // -  JSON result will be bound to the UI on the return of the API endpoints 
    //    DownloadHistory and EventHistory via a GET request.

  // fetch('../data/downloadsevents.json')
  // .then(response => {
  //   //console.log(response.json());
  //   //data = response.data;
  //   //return response.json();
  // })
  // .then(data => console.log(data));


const getDownloads = () => {
    // let url = "https://jsonplaceholder.typicode.com/users";
    // axios.get(url).then(res => {
    //     const users = res.data;
    //     this.setState({ users }); //console.log (users);// this.setState({users : users}); 
    // });
    let data = require('../data/downloadsevents.json'); //console.log(data);
    return (data);
};

let data = getDownloads();

const listDownloads = data.map((download) =>
  <tr key={download._id}>
    <td>{download._id}</td>
    <td>{download.socket}</td>
    <td>{download.songId}</td>
    <td>{download.downloadTime}</td>
  </tr>
);

  const DownloadsTable = () => {

  return(
  <div name="Downloads History Table" Style="margin: 7em;">
    <AdminTab />
    <HistoryTab selectProp="event" />
    <Card>
      <Card.Body>
        <h3 Style="text-align:left;"><Emoji symbol="🎧"/> Downloads History Table</h3>
      </Card.Body>
    </Card>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Socket</th>
          <th>Sond ID</th>
          <th>Download Time</th>
        </tr>
      </thead>
      <tbody>
        {listDownloads}
      </tbody>
    </Table>
  </div>
  );
}

export default DownloadsTable;