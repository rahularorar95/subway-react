import React ,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Sub from '../../components/Sub/Sub';
import SubMakerControls from '../../components/Sub/SubMakerControls/SubMakerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sub/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENTS_PRICES={
    salad:40,
    cheese:80,
    meat:120,
    bacon:90
}
class SubMaker extends Component{

    state = {
        ingredients : null,
        totalPrice:80,
        purchasable:false,
        purchasing:false,
        loading:false
    }

    componentDidMount(){
        axios.get("https://react-subway.firebaseio.com/ingredients.json")
        .then(response=>{
            this.setState({ingredients:response.data})
        })
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

    closeModal= ()=>{
        this.setState({purchasing:false});
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    purchaseContinue = ()=>{
        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)
            + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: 'checkout',
            search: '?'+queryString
        })
    }

   


    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        let orderSummary=null;
        let burger = <Spinner />
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Sub ingredients={this.state.ingredients}/>
                    <SubMakerControls addIngredient={this.addIngredient} 
                    removeIngredient ={this.removeIngredient}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
                </Aux>
            );

            orderSummary =  <OrderSummary
                    purchaseCanceled={this.closeModal}
                    purchaseContinue={this.purchaseContinue}
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}/>
        }

        if(this.state.loading){
            orderSummary= <Spinner />
        }
        
        return(
            <Aux>
                <Modal visible={this.state.purchasing} modalClose={this.closeModal}>
                {orderSummary}                   
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default SubMaker; 