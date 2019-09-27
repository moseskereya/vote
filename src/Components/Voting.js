import React, { Component } from 'react';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:1,
            count2:2,
            count3:0,
            count4:0
         }

         this.handleIncrement = this.handleIncrement.bind(this)
    }

handleIncrement = () =>{
    this.setState({
        count: this.state.count + 1
    })
}

handleChanges = () =>{
    this.setState({
        count2: this.state.count2 + 1
    })
}


handleNew= () =>{
    this.setState({
        count3: this.state.count3 + 1
    })
}
handleNumChanges = () =>{
    this.setState({
        count4: this.state.count4 + 1
    })
}


    render() { 
        return ( 
            <div>
              <div className="App_1">
              <h2>JavaScript <span>{this.state.count4}</span></h2>
              <button onClick={this.handleNumChanges}>Click</button>
              </div>
              <br/>
              <div className="App_1">
                <h2>PHP <span>{this.state.count}</span></h2>
                <button onClick={this.handleIncrement}>Click</  button>
              </div>
              <br/>
              <div className="App_1">
              <h2>Reactjs <span>{this.state.count2}</span></h2>
              <button onClick={this.handleChanges}>Click</button>
              </div>
              <br/>
              <div className="App_1">
              <h2>Vuejs <span>{this.state.count3}</span></h2>
              <button onClick={this.handleNew}>Click</button>
              </div>
            </div>
         );
    }
}
 
export default App1;