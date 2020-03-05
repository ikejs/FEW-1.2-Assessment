import React, { Component } from 'react';
import Counter from './Counter';

class Band extends Component {

    render() {
        const { band_name, formed, origin, fans } = this.props
        return (
            <div class="card col-md-3 mb-3">
                <div class="card-body">
                <h3 class="card-title">{band_name}</h3>
                <p class="card-text">
                    {band_name} formed in <strong>{formed}</strong> in <strong>{origin}</strong>. They currently have <strong>{fans}</strong> fans.
                </p>
                </div>
                <div class="card-body">
                    <Counter />
                </div>
            </div>
        )
    }

}

export default Band;
