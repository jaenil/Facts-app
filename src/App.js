import './App.css';
import React from 'react' ;
import NewsSearcher from './NewsSearcher';
import About from './About' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (  
    <Router>
      <div className="App">
      
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/'>
               
              <NewsSearcher />
              </Route>
            </Switch>
      </div>
    </Router> 
  );
}

export default App;
