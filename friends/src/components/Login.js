import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }
    handleOnChange = (e) => {
        this.setState({ 
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const creds = this.state.creds;
        axios.post("http://localhost:5000/api/login", creds)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => console.log(err))
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleOnChange}
                    />
                    <input
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleOnChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;