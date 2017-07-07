import React, { Component } from 'react';
import { render } from 'react-dom'
import Job from './Job.js'

class ViewJob extends Component {
    constructor(props) {
        super(props)
    }

    // loadJobsFromServer
    // add a section for Google Maps
        // this is going to be a grid layout with 2 sections
        // May be changed later

    render() {
        return (
            <div id='viewjobs'>
                {this.props.jobs}
            </div>
        )
    }
}

export default ViewJob;