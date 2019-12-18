import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const FriendList = (props) => {

    const [friends, setFriends] = useState('nodata');

    useEffect(() => {

        getFriendData();

    }, [])

    console.log('friendsOutside', friends)
    const getFriendData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('res.data', res.data)
                setFriends(
                    res.data
                )

            })
            .catch(err => console.log(err));
    }

    return (

        <div className="container">
            {friends !== 'nodata' &&
                (

                    friends.map((friend, index) => {
                        return (
                            <div className='card' key={friend.id}>
                                <div className="title">{friend.name}</div>
                                <div>{friend.age}</div>
                                <div>{friend.email}</div>
                            </div>)
                    })

                )
            }
        </div>
    )
}

export default FriendList;



