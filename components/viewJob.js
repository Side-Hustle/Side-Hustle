import React, { Component } from 'react';
import { render } from 'react-dom'
import Job from './Job.js'
import mapController from '../controller/mapController.js';

class ViewJob extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.jobs;
        let jobs = data.map((dataPoint) => {
            return <Job title={dataPoint.title} description={dataPoint.description} pay={dataPoint.pay} location={dataPoint.address}/>
        });
        // executes mapController.showMap before this.props.jobs
        mapController.showMap();
        return (
            <div id='viewjobs'>
                {jobs}
            </div>
        )
    }
}

export default ViewJob;