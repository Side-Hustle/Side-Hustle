import React, { Component } from 'react';
import { render } from 'react-dom';
import ViewJob from './viewJob.js';
import Job from './Job.js';
import FormOfInformation from './Form.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Mock Data

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

    // Creates a job component for each job request in the database
    componentDidMount() {
        let data = this.state.data;
        let jobs = data.map((dataPoint) => {
            return <Job title={dataPoint.title} description={dataPoint.description} pay={dataPoint.pay} location={dataPoint.location}/>
        });
        this.setState({'jobs': jobs});
    }

    render() {
        // ViewJob Component with relevant props passed down 
        const viewJob = (props) => {
            return (
                <ViewJob jobs={this.state.jobs} />
            );
        }
        return (
            // React Router is used to render components based on the route specified
            <Router>
                <div>
                    <ul>
                        <li><Link to="/PostJob">PostJob</Link></li>
                        <li><Link to="/ViewJob">ViewJob</Link></li>
                    </ul>
                   <Route path="/PostJob" component={FormOfInformation} />
                   <Route path="/ViewJob" component={viewJob} />
                </div>
            </Router>
        )
    }
}

export default App;