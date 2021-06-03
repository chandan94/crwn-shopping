import React from 'react';
import './button.styles.scss';

const Button = ({ children, googleSignIn, inverted, ...buttonProps }) => (
        <button className={`${inverted ? 'inverted' : ''}${googleSignIn ? 'google-button ' : ''} custom-button`} {...buttonProps} value={children} > {children} </button>
)

export default Button;