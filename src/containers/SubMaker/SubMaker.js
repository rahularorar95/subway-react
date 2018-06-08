import React ,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Sub from '../../components/Sub/Sub';
import SubMakerControls from '../../components/Sub/SubMakerControls/SubMakerControls';

const INGREDIENTS_PRICES={
    salad:40,
    cheese:80,
    meat:120,
    bacon:90
}
class SubMaker extends Component{

    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:80,
        purchasable:false
    }

    addIngredient=(type)=>{
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]= this.state.ingredients[type]+1;
        const updatedPrice = this.state.totalPrice +INGREDIENTS_PRICES[type];

        this.setState({totalPrice:updatedPrice , ingredients : updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredient=(type)=>{
        const updatedIngredients ={
            ...this.state.ingredients
        };
        if(this.state.ingredients[type] <= 0) return;
        updatedIngredients[type]= this.state.ingredients[type]-1;
        const updatedPrice = this.state.totalPrice -INGREDIENTS_PRICES[type];

        this.setState({totalPrice:updatedPrice , ingredients : updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    }

    updatePurchasable(ingredients){
        
        const sum = Object.keys(ingredients).map(key=>{
            return ingredients[key]
        }).reduce((tot,ele)=>{
            return tot+ele;
        },0);

        this.setState({purchasable : sum > 0})
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return(
            <Aux>
                <Sub ingredients={this.state.ingredients}/>
                <SubMakerControls addIngredient={this.addIngredient} 
                removeIngredient ={this.removeIngredient}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default SubMaker; 