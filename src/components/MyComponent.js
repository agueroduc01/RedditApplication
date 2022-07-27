import React from 'react';
import AddComponent from './AddComponent';
import JobListComponent from './JobListComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            {id: 'job1', title: 'Developer', salary: '500'},
            {id: 'job2', title: 'Tester', salary: '400'},
            {id: 'job3', title: 'Project Manager', salary: '1000'},
        ],
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [
                ...this.state.arrJobs,
                job
            ]
        })
    }

    deleteAJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job.id)
        })
    }

    /* JSX -> return block
    fragment
    */
    render() {
        return (
            // <React.Fragment> (shortcut: <>)
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                <JobListComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}/>
            </>
        )
    }
}

export default MyComponent;