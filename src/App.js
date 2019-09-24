
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';


const Home = lazy(() => import('./Component/HomePage/Main/MainPage'));


//Make the App skelton to be the router
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
      
      </Switch>
    </Suspense>
  </Router>
);

export default App;
