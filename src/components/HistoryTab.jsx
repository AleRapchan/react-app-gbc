import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {BrowserRouter, Route, Switch, Link, NavLink}  from 'react-router-dom';


const HistoryTab = () => {
  return(
    <div name="Events History Table" width="70%" Style="text-align:left;">
      <div name="History Tab" width="70%">
      {/* <h3>Select Log History: </h3> */}
      {/* <ButtonGroup size="lg" className="mb-2">
          <Button disabled><Link to={'/events'}>Event History</Link></Button>
          <Button><Link to={'/downloads'}>Download History</Link></Button>
        </ButtonGroup> */}

        <NavLink to={'/events'}>Event History</NavLink>
       {'  |  '}
        <NavLink to={'/downloads'}>Download History</NavLink>

        
      </div>
      <br/>
    </div>
  );
}

export default HistoryTab;