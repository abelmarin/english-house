import React from 'react';
import Popup from 'reactjs-popup';

import bannerCourses from '../assets/Banner-Courses-01.jpg';
import beginCourses from '../assets/begin-courses.jpg';
import middleCourses from '../assets/middle-courses.jpg';
import advancedCourses from '../assets/advanced-courses.jpg';
import beginnerBanner from '../assets/beginner-banner.png';
import middleBanner from '../assets/middle-banner.png';
import advancedBanner from '../assets/advanced-banner.png';




export const Courses = () => {
    return (
        <div className="coursesPage">
            <img src={bannerCourses} alt="Banner Courses" className="bannerCourses" />

            {/* Card for beginners */}
            <div className="card">
                <div className="card-image">
                    <img src={beginCourses} alt="beginCourses" className="schoolPic" />
                    
                </div>
                <div className="card-text">
                    <h2>Elementary Courses</h2>
                    <p>PK – Kindergarten (C100a-d): This course provides a fun and interactive learning experience for children age between 2 to 5.</p>

                    <Popup trigger=
                        {<button className="modal-btn">Read More</button>}
                        modal>
                       {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <img src={beginnerBanner} alt="Beginner Banner" className="modalBanner" />
                                <h1>Elementary Courses<br/>(Level 1)</h1>
                                <p className="modalText">PK – Kindergarten (C100a-d): This course provides a fun and interactive learning experience for children age between 2 to 5. In this course, students will be introduced to phonics where they will be learning the basics on how to pronounce the alphabets and at the same time learn the basics of writing.<br/><br/>
                                    Grades 1- 2 (C101a-b): This course provides a fun and interactive learning experience for children age between 5 to 7. In this course, students will be introduced to phonics CVC where they will be learning how to read, spell, and write basic words. By the end of the class students will be able to do a self-introduction.<br/><br/>
                                    Grades 2-3 (C102a-b):  This course provides an engaging and interactive learning experience for children age between 7-9. In this course, students will be introduced to double consonants and digraphs. Students will be learning the contents through reading comprehension, video listening, speaking, and Roleplaying.</p>
                            </div>
                       )}
                    </Popup>
                    
                </div>
            </div>

            {/* Card for intermediate */}
            <div className="card">
                <div className="card-image">
                    <img src={middleCourses} alt="Intermediate" className="schoolPic" />
                </div>
                <div className="card-text">
                    <h2>Intermediate Level</h2>
                    <p>Grades 3-4 (C200a-b): This course provides an engaging and interactive learning experience for children age between 9-11.</p>
                    <Popup trigger=
                        {<button className="modal-btn">Read More</button>}
                        modal>
                        {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <img src={middleBanner} alt="Intermediate Banner" className="modalBanner" />
                                <h1>Intermediate Level<br/>(Level 2)</h1>
                                <p className="modalText">
                                Grades 3-4 (C200a-b): This course provides an engaging and interactive learning experience for children age between 9-11. In this course, students will be introduced to Vowel digraphs. Students will be learning the contents through reading comprehension, video listening, speaking, and roleplaying at an intermediate level.<br/><br/>
                                    Grades 5-6 (C201a-b): This course provides an engaging and interactive learning experience for children age between 11-13. In this course, students will be introduced to sentence-diagramming grammar. Students will be learning the contents through reading comprehension, video listening, speaking, and roleplaying with emphasis on grammar.<br/><br/>
                                    Grades 5-7 (C202a-b): This course provides an engaging and interactive learning experience for children age between 11-14. In this course, students will be focusing on developing and practicing sentence-diagramming. Students will be learning the contents through reading comprehension, video listening, speaking, and roleplaying with emphasis on grammar.</p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>

            {/* Card for advanced */}
            <div className="card">
                <div className="card-image">
                    <img src={advancedCourses} alt="Two Students" className="schoolPic" />
                </div>
                <div className="card-text">
                    <h2>Advance Level</h2>
                    <p>Grades 7-9 (C300a-b): This course provides an engaging and interactive learning experience for children age between 14-16.</p>
                    <Popup trigger=
                        {<button className="modal-btn">Read More</button>}
                        modal>
                        {close => (
                            <div>
                                <button className="close" onClick={close}>&times;</button>
                                <img src={advancedBanner} alt="Advanced Banner" className="modalBanner" />
                                <h1>Advance Level<br/>(Level 3)</h1>
                                <p className="modalText">
                                    Grades 7-9 (C300a-b): This course provides an engaging and interactive learning experience for children age between 14-16. In this course, students will be focusing on developing and practicing sentence-diagramming in an advance level. Students will be learning the contents through reading comprehension, video listening, speaking, and roleplaying with emphasis on grammar at an advance level.<br/><br/>
                                    Grades 9-12 (C-Advance): This course provides an engaging and more intensive learning experience for teenagers age between 15-18. In this course, students will be taught advance grammar and will learn to elevate their knowledge in the English language. Students will be taught through writing, speaking, and listening exercises.</p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )

}
