import React, { Component } from 'react';
import { render } from 'react-dom'
import Job from './Job.js'

class ViewJob extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='viewjobs'>
                {this.props.jobs}
            </div>
        )
    }
}

export default ViewJob;