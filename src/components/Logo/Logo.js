import React from 'react';
import image from '../../assets/images/26.1 burger-logo.png.png';
import classes from './Logo.css';

const logo = (props) =>(
    <div className={classes.logo}>
        <img src={image} alt="My Sub"/>
    </div>
)

export default logo;