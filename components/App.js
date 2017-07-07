import React, { Component } from 'react';
import { render } from 'react-dom'
import ViewJob from './viewJob.js'
import Job from './Job.js'

// Mock Data
    // In the future, we can make a get request to our API route to get the data directly

let data =  [
    {
        title: 'Gardener',
        description: 'Pull weeds',
        pay: 50,
        location: 'San Antonio'
    },
    {
        title: 'Snow Shoveler',
        description: 'Shove snow',
        pay: 50,
        location: 'Austin'
    },
    {
        title: 'Painter',
        description: 'Paint walls',
        pay: 50,
        location: 'San Francisco'
    },
    {
        title: 'Carpenter',
        description: 'Install carpet',
        pay: 50,
        location: 'Venice Beach'
    },
    {
        title: 'Handyman',
        description: 'Fix toilet',
        pay: 50,
        location: 'Santa Barbara'
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {'data': data};
    }

    loadJobsFromServer(data) {
        
    }

    componentDidMount() {
        let data = this.state.data;
        let jobs = data.map((dataPoint) => {
            return <Job title={dataPoint.title} description={dataPoint.description} pay={dataPoint.pay} location={dataPoint.location}/>
        });
        this.setState({'jobs': jobs});
    }

    render() {
        return (
            <div>
                <ViewJob jobs={this.state.jobs}/>
            </div>
        )
    }
}

export default App;