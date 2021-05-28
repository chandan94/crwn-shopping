import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, style }) => {

    return (
        <div className={`${style} menu-item `} >
            <div className = 'backgroundImage' style={{
                backgroundImage: `url(${imageURL})`
            }}>
                <div className='content'>
                    <h3 className='title'>{title.toUpperCase()}</h3>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;