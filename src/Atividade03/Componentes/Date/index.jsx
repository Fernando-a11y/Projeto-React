
import React from 'react';

function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
        />
    );
}

const today = new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <>
            <h1>{name}'s To Do List</h1>
            <h2>{formatDate(today)}</h2>
            <Avatar />
        </>
    );
}



