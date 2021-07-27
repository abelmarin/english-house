import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState.js';

import banner from '../assets/Banner-01.jpg';
import mission from '../assets/mission.png'
import { Announcement } from './Announcement';

export const Home = () => {
    const { announcements } = useContext(GlobalContext);

    return (
        <div className="home-container">
            <img src={banner} alt="Banner" className="banner" />

            <h1 className="announcements">Why The English House?</h1>
            <img src={mission} alt="Mission Statement" className="mission" />

            <h1 className="announcements">Announcements!</h1>
            {announcements.map(announcement => (<Announcement key={announcement.id} announcement={announcement} />))}

        </div>
    )
}
