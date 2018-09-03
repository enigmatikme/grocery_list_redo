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
        $.ajax({
            method: 'POST', 
            url: 'http://localhost:3001/groceries',
            contentType: 'text/plain',
            dataType: 'text',
            data: this.state.name,
            success: function(result) {
                console.log("ajax request success", result);
                this.getList();
            }, 
            error: function(err) {
                console.log("post error");
            }
        });
    }
    getList() {
        // event.preventDefault();
        alert("hello");
        $.ajax({
            method: 'GET', 
            url: 'http://localhost:3001/groceries',
            // contentType: 'text/plain',
            // dataType: 'text', 
            success: function(results) {
                console.log("get request success in app.jsx", results);
                this.setState({
                    list: results
                })
            },
            error: function(err) {
                console.log("could not get data from db");
            }
        })
    }
    render() {
       return (
           <form onSubmit={this.handleSubmit}>
            <label>
                <div>
                Get Muchin
                </div>
                <input type="text" onChange={this.handleTextChange} />
                <input type="number" onChange={this.handleQuantityChange}/>
            </label>
            <input type="submit" />
          </form>

       )
    } 
}

export default App; 
