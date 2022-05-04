import React from 'react';

import { ProfileImg } from './profile_style';

export default function Profile(props) {
    const img = {title: "profile img", path: "img/profile.jpg"};
    return(
        <ProfileImg src = { img.path } { ...props }/>
    );
}