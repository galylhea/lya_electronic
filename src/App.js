import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Board from './pages/home'

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Board} />
      </div>
    </Router>
  );
}

export default App;