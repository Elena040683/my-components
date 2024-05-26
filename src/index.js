import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Cоздали react элемент и сохранили в переменную
const myBtn = React.createElement('button', {type: 'button'}, 'load more')
console.log(myBtn);

// Теперь надо зарэндерить элемент
// ReactDOM.render(myBtn, App);

let value = 'click'
const newBtn = <button type="button">{value}</button>
console.log(newBtn);

const teamItem = 
<>
  <img src='' alt=''/>
  <h3>heading</h3>
</>
console.log(teamItem);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);





