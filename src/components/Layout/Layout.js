import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import React, { Component } from 'react';

class Layout extends Component {
    state={
        showSideDrawer :false
    }
    closeSideDrawer =()=>{
        this.setState({showSideDrawer:false});
    }
    toggleMenu = ()=>{
        this.setState((prevState)=>{
         return {showSideDrawer:!prevState.showSideDrawer};   
        });
    }
    render(){
        return (
            <Aux>
                <Toolbar toggleMenu= {this.toggleMenu}/>
                <SideDrawer closed={this.closeSideDrawer} 
                showSideDrawer={this.state.showSideDrawer}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;