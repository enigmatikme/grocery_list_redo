import React from 'react';

class GroceryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
           {
              this.props.list((item) => {
                 <h2> { item.item } and {item.quantity} </h2>
           })
           }
            </div>
        )
    }
}

export default GroceryList;