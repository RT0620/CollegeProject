import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Image from './pages/Images/Image'
import { Route,Switch} from "react-router-dom";
import Home from './pages/home/home'
import Gifs from './pages/gif/gif'
import Quiz from './pages/Quiz/Quiz'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/images" component={Image} />
          <Route exact path="/gifs" component={Gifs} />
          <Route exact path="/quiz" component={Quiz} />

        </Switch>
        
      </div>
    );

  }
 
}

export default App;
