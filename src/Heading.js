import React, { Component } from 'react';
const metalJSON = require('./metal.json');

class Heading extends Component {

    render() {
        return (
            <div>
                <h1 class="mt-4">FEW 1.2 Final Assessment</h1>
                <p class="lead">Ike Holzmann</p>
                <hr></hr>
                <h3 class="m-4">{metalJSON.length} bands</h3>
            </div>
        )
    }

}

export default Heading;
