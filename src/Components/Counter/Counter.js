import React from 'react';
import './Counter.css';


export default function Counter({onIncrement, onDecrement, page, btnClass}) {
    return (
        <div className={btnClass}>
            <button class="minus-button" onClick={onDecrement}></button>
            <span className='text'> {page}</span>
            <button class="plus-button" onClick={onIncrement}></button>
        </div>
    )
}


// import React, { Component } from 'react'

// export default class Counter extends Component {
//     state = {
//         count: 0
//     }
    // handleIncrement = () => {
    //     if(this.state.count < 10) {
    //         this.setState((prev)=> ({
    //             count: prev.count + 1
    //         }))
    //     }
        
    // }
    // handleDecrement = () => {
    //     if(this.state.count !== 0) {
    //         this.setState((prev)=> ({
    //             count: prev.count - 1
    //         }))
    //     }
        
    // }
//     render() {
//         return (
        // <div>
        //     <button onClick={this.handleDecrement}>-</button>
        //     <span>Cont:{this.state.count}</span>
        //     <button onClick={this.handleIncrement}>+</button>
        // </div>
//         )
//     }
// }

