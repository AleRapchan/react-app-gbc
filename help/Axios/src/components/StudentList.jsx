import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';

class UserList extends Component {
    
    state = {users: []}

    componentDidMount(){    
        this.listStudents();
    }

    listStudents(){
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then(res => {
            const users = res.data;
            // this.setState({users : users}); 
            // As they are equals do the following line
            this.setState({ users });
            //console.log (users);
        });
    }

    addNewStudent = (studentData) => { //called by child component

        // Remote 
        let url = "https://jsonplaceholder.typicode.com/users"; 
        axios
            .post(url, {user: {name: studentData.name }})
            .then((response) => {console.log(response);});
        
        // Local
        this.setState((state,props) => ({users: [...this.state.users, studentData]}));
        
        console.log(this.state.users); // This is the previous state!
    };

    deleteStudent = (id) => {
        //DELETE REMOTE
        //Resource will not be really updated on the server but it will be faked as if.
        let url=`https://jsonplaceholder.typicode.com/users/${this.props.id}`;
        axios
            .delete(url)
            .then((response) => {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });

        //DELETE LOCAL
        console.log(`Student id: ${id}`);
        const filterUsers = this.state.users.filter((x) => x.id !== id);
        this.setState({users: filterUsers,});
    };

    render() { 
        return (  
            <>
                <AddStudent addNewStudent={this.addNewStudent} />
                <ul id="StudentList">
                    {this.state.users.map(usr => (
                    <li 
                        key={usr.id} 
                        id={usr.id} 
                    >
                    {usr.name} 
                    <DeleteStudent id={usr.id} deleteStudent={this.deleteStudent} />
                    </li>))}
                </ul> 
            </>
        );
    }
}
 
export default UserList;