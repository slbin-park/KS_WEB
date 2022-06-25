import React from 'react';

import { ProfileImg } from './profile_style';

export default function Profile() {
    const img = {title: "profile img", path: "img/profile.jpg"};
    
    return(
        <ProfileImg src = { img.path }/>
    );
}