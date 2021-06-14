import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, imageURL, style, linkURL, history, match }) => {
    return (
        <div className={`${style} menu-item `} onClick={() =>  {
            history.push(`${linkURL}`);
            }}>
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

export default withRouter(MenuItem);