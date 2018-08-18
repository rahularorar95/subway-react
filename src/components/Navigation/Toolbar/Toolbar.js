import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) =>(
    <header className={classes.toolbar}>
        <div className={classes.DrawerToggle} onClick={props.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;