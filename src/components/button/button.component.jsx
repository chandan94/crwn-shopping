import React from 'react';
import './button.styles.scss';

const Button = ({ children, googleSignIn, ...buttonProps }) => (
        <button className={`${googleSignIn ? 'google-button ': '' } custom-button`} {...buttonProps} value={children} > {children} </button>
)

export default Button;