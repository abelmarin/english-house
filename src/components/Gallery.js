import React, { Component } from 'react';

import galleryText from '../assets/Banner-Gallery-02.jpg';
import galleryCollage from '../assets/Gallery-Collage.png';

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <img src={galleryText} alt="Gallery Title" className="galleryText" />
                <img src={galleryCollage} alt="Gallery Collage" className="galleryCollage" />

            </div>
        )
    }
}
