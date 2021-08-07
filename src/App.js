import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'; 
import Counter from './Components/Counter/Counter';
import ShowCount from './Components/ShowCount/ShowCount';
import '../src/App.css';

export default class App extends Component {
  state = {
    count: 0
  }
  handleIncrement = () => {
    if(this.state.count < 10) {
        this.setState((prev)=> ({
            count: prev.count + 1
        }))
    }
    
}
handleDecrement = () => {
    if(this.state.count !== 0) {
        this.setState((prev)=> ({
            count: prev.count - 1
        }))
    }
    
}
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <div className='links'>
            <NavLink to='/counter1' className='link' activeClassName='link-active'>Counter 1</NavLink>
            <NavLink to='/counter2' className='link' activeClassName='link-active'>Counter 2</NavLink>
            <NavLink to='/counter3' className='link' activeClassName='link-active'>Counter 3</NavLink>
          </div>
          <div className='rightSide'>
            <div className='counters'>
              <Switch>
                <Route path='/counter1'><Counter page='Page 1' btnClass='first-page-button' onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/></Route>
                <Route path='/counter2'><Counter page='Page 2' btnClass='second-page-button' onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} /></Route>
                <Route path='/counter3'><Counter btnClass='third-page-button' onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/></Route>
              </Switch>
              
            </div>
            <ShowCount count={this.state.count}></ShowCount>

          </div>
          
        </div>

        
      </Router>
      
    )
  }
}





// import './App.css';
// import Counter from './Components/Counter/Counter';

// function App() {
//   return (
//     <div>
//       <Counter></Counter>
//       <Counter></Counter>
//     </div>

    
 
//   );
// }

// export default App;
