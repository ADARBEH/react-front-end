import React, { Component } from 'react';
import axios from 'axios';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: ''
        }
    }

    changeHandel = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandle = (e) => {
        e.preventDefault();
        const dd = axios.post('https://server-adarbeh.herokuapp.com/person', this.state)
            .then(response => {
                console.log(response.data)
                return response.data

            })
            console.log(dd.Object)


            .Catsh(error => {
                console.log(error)
            }
            )
    }

    render() {
        const { name, age, gender } = this.state
        return (
            <>
            
            <div>
                <form onSubmit={this.submitHandle}>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandel} />
                    </div>

                    <div>
                        <input type="text" name="age" value={age} onChange={this.changeHandel} />
                    </div>
                    <div>
                        <input type="text" name="gender" value={gender} onChange={this.changeHandel} />
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
            <div>
                <h1>YOUR INFO </h1>
                <h3>name: {name}</h3>
                <h3>age: {age}</h3>
                <h3>gender:{gender}</h3>
            </div>

            </>
        );
    }
}

export default Person;