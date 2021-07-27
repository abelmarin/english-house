import React from 'react';

export const Announcement = ({ announcement }) => {
    return (
        <div className="announcement-wrapper">
            <h1>{announcement.title}</h1>
            <h3>{announcement.date}</h3>
            <p>{announcement.content}</p>
        </div>
    )
}
