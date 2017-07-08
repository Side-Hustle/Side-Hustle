import React, { Component } from 'react';
import { render } from 'react-dom'
import Job from './Job.js'
import mapController from '../controller/mapController.js';

class ViewJob extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        mapController.showMap();
        return (
            <div id='viewjobs'>
                {this.props.jobs}
            </div>
        )
    }
}

export default ViewJob;