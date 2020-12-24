import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './componants/MainComponent';

class App extends Component{
 
  render() {
    return (

      // we should enclose our whole app inside the browser router component to enable react router
      <BrowserRouter>
        <div className="App">
          <Main/>
         </div>
      </BrowserRouter>
    
  );
  }

}

export default App;
