import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var fauxList = [
    {item: "avacado", quantity: 2}, 
    {item: "chicken", quantity: 3}, 
    {item: "chicken", quantity: 4}
];
// was this an array of objects?
ReactDOM.render(<App groceryList={fauxList}/>, document.getElementById('app'));