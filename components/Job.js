import React, { Component } from 'react';
import { render } from 'react-dom'

class Job extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="job">
            <p><strong>Title:</strong> {this.props.title}</p>
            <p><strong>Description:</strong> {this.props.description}</p>
            <p><strong>Pay:</strong> {this.props.pay}</p>
            <p><strong>Location:</strong> {this.props.location}</p>
        </div>
        )
    }
}

export default Job;