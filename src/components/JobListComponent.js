import React from 'react';

class JobListComponent extends React.Component {

    state = {
        checkShow: false
    }

    handleClick() {
        this.setState({
            checkShow: !this.state.checkShow
        })
    }

    handleClickDelete(item){
        this.props.deleteAJob(item);
    }

    render() {
        let { arrJobs } = this.props;
        return (
            <>
                {/* if checkShow === false. Ở đây dùng toán tử 3 ngôi a>b?x:y */}
                {!this.state.checkShow ?
                    <div>
                        <button onClick={() => this.handleClick()}>Show</button>
                    </div>
                :
                    <>
                        <div className="job-list">
                            {arrJobs.map(item => (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$ <></><span onClick={() => this.handleClickDelete(item)}>&times;</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button onClick={() => this.handleClick()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default JobListComponent;