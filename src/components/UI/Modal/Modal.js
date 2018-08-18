import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    
    shouldComponentUpdate(nextProps ){
        return nextProps.visible !== this.props.visible || nextProps.children !== this.props.children;
    }

    componentWillUpdate(){
        console.log("modal updated");
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.visible}  backdropClicked = {this.props.modalClose}/>  
                <div className={classes.Modal}
                    style={{
                        transform:this.props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:this.props.visible ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
            );
    }
}

export default Modal;