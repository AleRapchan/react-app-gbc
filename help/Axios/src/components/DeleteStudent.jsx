import React, { Component } from 'react';

class DeleteStudent extends Component {
    
    handleClick = event => {
        event.preventDefault();
        this.props.deleteStudent(this.props.id);
    };

    render() { 
        return (  
            <div name="Del Student">
                <button onClick={this.handleClick} type="input">
                    Delete
                </button>
            </div>
        );
    }
}

export default DeleteStudent;