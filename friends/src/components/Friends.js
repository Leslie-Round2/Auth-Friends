import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

import FriendCard from './FriendCard';

const Friends = () => {
    const [ friends, setFriends ] = useState();

    const handleOnClick = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriends(res.data);
            })
    }
    return(
        <div>
            <h2>This the friends component, A protected component.</h2>
            <button onClick={handleOnClick}>Click me to get all the friends!</button>
            <div> Friends : { friends && friends.map(friend => <FriendCard friend={friend} />) } </div>
        </div>
    )
}

export default Friends;