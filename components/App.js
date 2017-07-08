import React, { Component } from 'react';
import { render } from 'react-dom';
import ViewJob from './viewJob.js';
import Job from './Job.js';
import FormOfInformation from './Form.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';
import mapController from './../controller/mapController'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    retrieveDataFromServer() {
        $.get('http://localhost:3000/api', (data) => {
          let validLocations = mapController.getDistance(data);
          validLocations.then(jobdata => {
            mapController.filteredData = jobdata;
            this.setState({'jobs': jobdata})
          });
        });
    }
    // Creates a job component for each job request in the database
    componentDidMount() {
        this.retrieveDataFromServer();
        console.log('passed');
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
                        <Link to="/PostJob">PostJob</Link>
                        <Link to="/ViewJob">ViewJob</Link>
                        {/*<button onClick={this.retrieveDataFromServer}></button>*/}
                    </ul>
                   <Route path="/PostJob" component={FormOfInformation} />
                   <Route path="/ViewJob" component={viewJob} />
                </div>
            </Router>
        )
    }
}

export default App;