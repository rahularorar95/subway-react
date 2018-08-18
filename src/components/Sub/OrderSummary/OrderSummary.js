import React ,{Component}from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentWillUpdate(){
        console.log("order summary updated")
    }
    
    render(){
        
        const ingredientSummary = Object.keys(this.props.ingredients).map(key=>{
            return (<li key={key}>
                        <span style={{textTransform:'capitalize'}}>{key}</span>: {this.props.ingredients[key]} 
                    </li>
            );
        })   
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>Total Price : {this.props.price} Rs.</strong></p>
                <Button
                btnType="Danger"
                clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button
                btnType="Success"
                clicked={this.props.purchaseContinue}
                >CONTINUE</Button>
            </Aux>
        );

    }
}
export default OrderSummary;