import React from 'react';

const FriendCard = (props) => {
    return(
        <div>
            <h4>{props.friend.name} </h4>
            <h5> Age: {props.friend.age} </h5>
            <h5> Email: {props.friend.email} </h5>
        </div>
    )
}

export default FriendCard;