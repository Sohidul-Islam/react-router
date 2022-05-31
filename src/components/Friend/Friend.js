import React from 'react';
import "./Friend.css";
const Friend = (props) => {
    const { name, email, website, username } = props.user;
    return (
        <div className="friend-card">
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Username: @{username}</h2>
            <a href={"https://" + website}>{website}</a>
        </div>
    );
};

export default Friend;