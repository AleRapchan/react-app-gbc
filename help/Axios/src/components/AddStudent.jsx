import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddStudent extends Component {
    
    state = { id: 0, name: ""}

    handleChange = event => {
        this.setState({name : event.target.value});
    };
    
    handleSubmit = event => {
        event.preventDefault();
        let newId = uuidv4();
        this.setState({id : newId});
        //this.setState({id : newId, name : event.target.value});
        this.props.addNewStudent({id: this.state.id, name: this.state.name});
    };

    render() { 
        return (  
            <div name="Add Student">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Student Name:
                        <input 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange} 
                            value={this.state.name}
                        />
                    </label>
                    <button type="submit">Add Student</button>
                </form>
            </div>
        );
    }
}
export default AddStudent;