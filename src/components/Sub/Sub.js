import React from 'react';
import classes from './Sub.css';
import SubIngredient from './SubIngredient/SubIngredient';

const sub = (props) =>{
    let ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_,i)=>{
                return <SubIngredient key={key+i} type={key} />
            })
        }).reduce((pre , cur)=>{
            return pre.concat(cur);
        },[]);
    
    if(ingredients.length===0){
        ingredients = <p>Please start adding ingredients </p>;
    }
    console.log(ingredients)
    return (
        <div className={classes.sub}>
            <SubIngredient type="bread-top" />
            {ingredients}       
            <SubIngredient type="bread-bottom"/>
        </div>
    );
}

export default sub;