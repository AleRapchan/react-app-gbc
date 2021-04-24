import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //npm i bootstrap --save
import DownloadsTable from './components/DownloadsTable';
import EventsTable from './components/EventsTable';
import LoginForm from './components/LoginForm';
import FooterDiv from './components/FooterDiv';
import Error from './components/Error';
import Home from './components/Home';
import {BrowserRouter, Route, Switch, Link}  from 'react-router-dom'; //npm i react-router-dom --save

//import HistoryTab from './components/HistoryTab';
// Bonus mark for implementing pagingsorting and filter (ie. forexample using React Material data grid control)
// When clickDownload History in navigation tab will navigate to the Download History view
// Admin label and Logout is not required and bonus forthis projec

//Routing and Navigation

const hasRole = (who) =>{
  if (who === 'admin'){ 
    return (true);
  }else{
    return (false);
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <img src="../public/logo5.png" /> */}
        <h1 Style="text-align:center;margin: 20px;"> Music App </h1>
        <h2>Full Stack Development IV (Winter 2021)</h2>
        {/* <DownloadsTable />
        <EventsTable />
        <LoginForm /> */}
        {/* */}
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={LoginForm} />
          { hasRole('admin') && <Route path="/downloads" component={DownloadsTable} />}
          { hasRole('admin') && <Route path="/events" component={EventsTable} />}
          {/* { hasRole(admin, ['admin']) && <Route path="/events" component={EventsTable} />} */}
          <Route component={Error} />
        </Switch>
      </div>
      <FooterDiv /> 
    </BrowserRouter>
  );
}

export default App;