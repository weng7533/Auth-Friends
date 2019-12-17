import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


const AddFriends = props => {

    const [friend, setFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })


    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        });
    }

    const addAFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('./friends', friend)
            .then(res => {
                console.log(res);

                props.history.push('/friendsList');
            })
            .catch(err => console.log(err));

        setFriend({
            id: Date.now(),
            name: '',
            age: 0,
            email: '',
        })
    }

    return (
        <div>
            <form onSubmit={addAFriend}>
                <input
                    type="text"
                    name="name"
                    placeholder='name'
                    value={friend.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder='age'
                    value={friend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>

            </form>
        </div>
    )

}


export default AddFriends;