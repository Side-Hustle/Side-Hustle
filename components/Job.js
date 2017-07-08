import React, { Component } from 'react';
import { render } from 'react-dom'

class Job extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="job">
            <h2>{this.props.title}</h2>
            <h2>{this.props.description}</h2>
            <h2>{this.props.pay}</h2>
            <h2>{this.props.location}</h2>
        </div>
        )
    }
}

export default Job;