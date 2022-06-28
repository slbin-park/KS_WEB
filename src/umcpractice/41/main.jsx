import React from 'react';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import './page.css'

const app = () => {
    return (
        <div>
            <div className='header'>
                <h1>가로스크롤</h1>
            </div>
            <div className='horizon'>
                <Page1 />
                <Page2 />
                <Page3 />
            </div>
        </div >
    )
}

export default app