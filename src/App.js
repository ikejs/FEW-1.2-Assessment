import React, { Component } from 'react';
import './App.css';
import Heading from './Heading'
import Band from './Band'
const metalJSON = require('./metal.json');



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }

  }

  render() {
    
    return (
      <div class="container col-md-8 text-center">
       <Heading />
        <div class="row text-center">
          {
            metalJSON.map((band) => {
              const { band_name, formed, origin, fans } = band;
              return (
                <Band
                  band_name={band_name}
                  formed={formed}
                  origin={origin}
                  fans={fans}
                />
              )
            })
          }
        </div>
      </div>
    );
  }

}

export default App;
