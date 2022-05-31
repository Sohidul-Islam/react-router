import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import "./Friends.css"

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>This is Friends page</h1>
            <div className="friend-container">
                {users.map(user => <Friend key={user.id} user={user}></Friend>)}
            </div>

        </div>
    );
};

export default Friends;