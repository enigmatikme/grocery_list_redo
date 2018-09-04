import React from 'react';
import GroceryList from './GroceryList.jsx'
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0,
            list: []
        }
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleQuantityChange = this.handleQuantityChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getList = this.getList.bind(this);
      this.updateList = this.updateList.bind(this);
    }

    handleTextChange(event) {
      this.setState({
          name: event.target.value
      })
    }

    handleQuantityChange(event){
        this.setState({
            quantity: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var that = this; 
        $.ajax({
            method: 'POST', 
            url: 'http://localhost:3001/groceries',
            contentType: 'application/JSON',
            data: JSON.stringify({
                name: this.state.name,
                quantity: this.state.quantity
            }),
            success: function(result) {
                console.log("ajax request success", result);
                that.getList();
            }, 
            error: function(err) {
                console.log("post error");
            }
        });
    }

    updateList(list) {
        this.setState({ list });
    }
    
    getList() {
        // event.preventDefault();
        $.ajax({
            method: 'GET', 
            url: 'http://localhost:3001/groceries',
            // contentType: 'text/plain',
            // dataType: 'text', 
            success: (results) => {
                console.log("get request success in app.jsx", results);
                this.updateList(results);
            },
            error: function(err) {
                console.log("could not get data from db");
            }
        })
    }
    componentDidMount() {
        this.getList();
    }
    render() {
        return (
            <div> 
            <form onSubmit={this.handleSubmit}>
            <label>
                <div>
                <h1> Get Muchin </h1>
                </div>
                <input type="text" onChange={this.handleTextChange} />
                <input type="number" onChange={this.handleQuantityChange}/>
            </label>
            <input type="submit" />
          </form>
           <GroceryList allGroceries={this.state.list} />
         </div>

       )
    } 
}

export default App; 
