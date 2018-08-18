import React ,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients : null,
        price : 0
    }
    checkoutCancelled = ()=>{
        this.props.history.goBack();
    }

    checkoutContinued=()=>{
        this.props.history.replace('checkout/contact-data');
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients ={}
        let price = 0;
        for(let i of query.entries()){
            if(i[0] === 'price'){
                price = i[1]
            }else{
                ingredients[i[0]] = +i[1];
            }
        }

        this.setState({ingredients:ingredients , price:price});
    }

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelled}
                checkoutContinued={this.checkoutContinued}/>

                <Route path={this.props.match.path +'/contact-data'} render={()=>(<ContactData ingredients={this.state.ingredients} price = {this.state.price}/>)} />
            </div>
        )
    }
}

export default Checkout;