import React from 'react';
import GroceryItem from './GroceryItem.jsx';


class GroceryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> 
           {
              this.props.allGroceries.map((item) => {
                  return (<GroceryItem item={item}/>)
              })
           }
            </div>
        )
    }
}

export default GroceryList;