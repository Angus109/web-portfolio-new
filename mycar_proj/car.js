import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main.js';

function App(){
    const [car, setCar] = useState({ 
        carOne: 'pic_fold\fox.jpg'c,
        carTwo: 'pic_fold\fox.jpg',
        carThree: 'pic_fold\fox.jpg',

} );

    return(
        <div className='prev_items'>
            <div className='main_item'>
                {car.carOne}
            </div>
            <div className='sub_items'>
                <img src='pic_fold\fox.jpg' onClick={()=>{car.carOne}}></img>
                <img src='pic_fold\fox.jpg' onClick={()=>{car.carOne}}></img>
                <img src='pic_fold\fox.jpg' onClick={()=>{car.carOne}}></img>            </div>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);