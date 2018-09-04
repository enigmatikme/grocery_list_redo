import React from 'react';

class GroceryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
           {
              this.props.allGroceries.map((item, i) => {
                return ( <h3 key={item[i]}> { item.name } and {item.quantity} </h3>)
              })
           }
            </div>
        )
    }
}

export default GroceryList;