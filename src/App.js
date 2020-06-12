import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { Resume } from './Resume';
import { Bio } from './Bio';
import { NoMatch } from './NoMatch';



function App() {
  return (
    <React.Fragment>
  <Router basename={process.env.PUBLIC_URL}>
  <NavigationBar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
  <Route path={process.env.PUBLIC_URL + '/bio'} component={Bio} />
  <Route component={NoMatch} />
</Switch>
    
  </Router>
</React.Fragment>
  );
}

export default App;
