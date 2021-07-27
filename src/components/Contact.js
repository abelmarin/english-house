import React, { Component } from 'react';

import textContact from '../assets/TextContacts.png';

const onSubmit = e => {
    console.log("poop");
}

export default class Contact extends Component {
    render() {
        return (
            <div>
                <img src={textContact} alt="Contact Title" className="textContact" />

                <div className="map">
                    <iframe title="English House location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.311957488911!2d100.71832031533985!3d13.820296990303161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6487d19954f3%3A0x62c6c68db11c74f8!2s51%20Soi%20Rungkit%20Grand%20Vista%2C%20Khwaeng%20Min%20Buri%2C%20Khet%20Min%20Buri%2C%20Krung%20Thep%20Maha%20Nakhon%2010510%2C%20Thailand!5e0!3m2!1sen!2sus!4v1623597004437!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    
                </div>

                <div className="bottom-row">
                    <div className="owner-card">
                        <h1>The English House</h1>
                        <p>51/218<br/>
                            Rungkit Grand Vista<br/>
                            Hatairat Rd.,<br/>
                            Minbuiri, Thailand<br/>
                            10510<br/><br/>
                            Mrs Lynn Yancey<br/>
                            General Manager<br/>
                            0818388433</p>
                    </div>

                    <form className="contact-form" onSubmit={onSubmit}>
                        <h1>Contact Us!</h1>
                        <div className="form-group">
                            <label htmlFor="text">Name:</label>
                            <input type="text"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Email:</label>
                            <input type="text"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Inquiries:</label>
                            <textarea></textarea>
                        </div>
                        <button className="contact-send">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}
