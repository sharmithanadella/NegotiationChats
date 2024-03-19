// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PricePredictionPage from './PricePredictionPage';
import ChatPage from './ChatPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PricePredictionPage} />
        <Route path="/chat/:sellerName" component={ChatPage} />
      </Switch>
    </Router>
  );
};

export default App;
