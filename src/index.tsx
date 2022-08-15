import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



let users = [
{
    name: 'Ruslan',
    age: 20,
    adress : {
        city: 'Bobruisk',
        country: 'Belarus'
    }
},
    {
        name: 'Dima',
        age: 25,
        adress: {
            city: 'Bobruisk',
            country: 'Belarus'

    }
}
]

console.log(users[0].adress.country);







