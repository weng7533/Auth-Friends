import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';




const Login = props => {

    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    })


    const handleChange = e => {
        setState({
            ...state,
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    const login = e => {
        e.preventDefault();
        setState({
            ...state,
            isFetching: true
        })
        axiosWithAuth()
            .post('./login', state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friendsList');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={state.credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
                {state.isFetching && 'logging in'}
            </form>
        </div>
    )

}


export default Login;