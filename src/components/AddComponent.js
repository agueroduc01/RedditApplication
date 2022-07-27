import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangetitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Please enter a title or a salary')
            return;
        }
        console.log(this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <form className="vertical-center">
                        <label>Job Name:</label>
                        <input type="text" value={this.state.title}
                        onChange={(e) => this.handleChangetitle(e)}/>

                        <label>Salary:</label>
                        <input type="text" value={this.state.salary}
                        onChange={(e) => this.handleChangeSalary(e)}/>

                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddComponent;