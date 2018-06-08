import React from 'react';
import classes from './SubMakerControl.css';

const subMakerControl = (props) =>(
    <div className={classes.control}>
        <div className={classes.label}>{props.text}</div>
        <button 
            className={classes.less} 
            onClick = {props.remove} 
            disabled={props.disabled}>
            Less
        </button>

        <button 
            className={classes.more} 
            onClick = {props.add}>
            More
        </button>

    </div>
);

export default subMakerControl;