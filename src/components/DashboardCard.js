import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState.js';


export const DashboardCard = ({ announcement }) => {
    const { deleteAnnouncement } = useContext(GlobalContext);

    return (
        <div className="dashboard-card-wrapper">
            <span>
                <h2>{announcement.title}</h2>
                <h3>{announcement.date}</h3>
                <button onClick={() => deleteAnnouncement(announcement._id)} className="delete-btn">x</button>
            </span>
            <p className="announcement-content">{announcement.content}</p>
        </div>
    )
}
