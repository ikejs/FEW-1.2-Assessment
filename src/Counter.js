import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div class="row offset-md-3">
                <button
                    class="card-link btn btn-danger btn-sm mr-3"
                    onClick={() => {
                        this.setState({ count: this.state.count -= 1 })
                    }}
                ><span class="fas fa-thumbs-down"></span></button>
                <h3>{this.state.count}</h3>
                <button
                    class="card-link btn btn-success btn-sm ml-3"
                    onClick={() => {
                        this.setState({ count: this.state.count += 1 })
                    }}
                ><span class="fas fa-thumbs-up"></span></button>
            </div>
        )
    }

}

export default Counter;
