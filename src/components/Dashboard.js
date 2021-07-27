import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'


import logo2 from '../assets/Logo-02.png'
import { DashboardCard } from './DashboardCard'

import { GlobalContext } from '../context/GlobalState.js'

export const Dashboard = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [content, setContent] = useState('')

    const { announcements, addAnnouncement } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newComment = {
            _id: Math.floor(Math.random() * 100000000),
            title,
            date,
            content
        }

        addAnnouncement(newComment)
    }

    return (
        <div className="dashboard-container">
            <div className="left-dashboard">
                <button className="logout-btn">Log Out</button>
                <form className="dashboard-form" onSubmit={onSubmit}>
                    <img src={logo2} alt="Logo 2" className="dashboard-logo" />
                    <h1>New Announcement</h1>
                    <input 
                        type="text"
                        placeholder="Title"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}></input>
                    <textarea 
                        placeholder="Type Content Here"
                        value={content} 
                        onChange={(e) => setContent(e.target.value)}></textarea>
                    <button className="post-btn" onClick={() => setDate(getCurrentDate())}>Post</button>
                </form>
            </div>
            <div className="dashboard-list">
            <NavLink to="/" className="menu-links">Return to Home</NavLink>

            {announcements.map(announcement => (<DashboardCard key={announcement.id} announcement={announcement} />))}
            </div>
        </div>
    )
}


function getCurrentDate() {
    const myDate = new Date()
    let year = myDate.getFullYear(),
        month = String(myDate.getMonth()+1),
        day = myDate.getDate()
    if (month.length < 2) month = "0" + month
    const dateString = `${day}/${month}/${year}`
    return dateString
}
