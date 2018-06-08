import React from 'react';
import classes from './SubMakerControls.css';
import SubMakerControl  from './SubMakerControl/SubMakerControl';
const controls = [
    {label: 'Salad' , type:'salad' },
    {label: 'Bacon' , type:'bacon' },
    {label: 'Cheese' , type:'cheese' },
    {label: 'Meat' , type:'meat' }
];

const subMakerControls = (props) =>(
    <div className={classes.controls}>
        <p> Current Price : <strong>{props.price} Rs</strong> <em>*(including GST)</em></p>
        {controls.map(control => (
            <SubMakerControl key= {control.label} text={control.label} 
            add={()=> props.addIngredient(control.type)}
            remove ={()=>props.removeIngredient(control.type)}
            disabled={props.disabled[control.type]}/> 
        ))}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}>
        Order Now
        </button>
    </div>
);


export default subMakerControls;