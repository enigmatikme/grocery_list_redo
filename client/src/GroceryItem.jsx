import React from 'react';
// import GroceryList from './GroceryList';

class GroceryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strikeThrough: false
        }
    }

    handleClick() {
        // this.setState({
        //     strikeThrough: true
        // })
        alert("clicked")
    }
    
    render() {
        return ( 
            <div onClick={this.handleClick}>
        <h3> <li> { this.props.item.name } and {this.props.item.quantity} </li> </h3>
        </div>
        )
    }
    
    
}

export default GroceryItem;