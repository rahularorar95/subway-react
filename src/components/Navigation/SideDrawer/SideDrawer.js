import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) =>{
    let sidedrawerClasses = [classes.sideDrawer , classes.close];
    if(props.showSideDrawer){
        sidedrawerClasses = [classes.sideDrawer , classes.open];
    }
    return(
        <Aux>
            <Backdrop show={props.showSideDrawer} backdropClicked={props.closed}/>
            <div className={sidedrawerClasses.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationsItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;