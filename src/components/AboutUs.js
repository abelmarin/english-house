import React, { Component } from 'react';

import aboutUsText from '../assets/TextAboutUs.png';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <iframe title="Placeholder" width="560" height="300" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src={aboutUsText} alt="About Us Title" className="aboutUsText" />
                <p>The English House is an English Language school, we are committed to providing our students with the best resources and the highest quality teachers to support them in learning the English language. Our school has over 10 years of experience in teaching and we have produced numerous students with exceptional English proficiency through our rigorous courses.<br/><br/>
                    With over ten years of experience, our courses have been designed to provide our students with a solid foundation in English. Within the courses, our students will have the opportunity to explore the language in-depth where they will be learning every aspect of the language from phonics to grammar to conversations. By combining several topics into one course we were able to streamline the course contents and eliminate the need for external topic-specific classes. This makes learning English at The English House much more cost effective than other institutions.<br/><br/>
                    Through our courses, our students will have the chance to interact and learn from our highly-qualified teachers. Our teachers have been trained to provide our students with the most engaging and holistic learning experience with the use of in-class technologies. The combination of well-designed courses, high-quality teachers, and in-class technologies, we have produced numerous students who can comprehend the English Language at an advanced level.</p>
            </div>
        )
    }
}
