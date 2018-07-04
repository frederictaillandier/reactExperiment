import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {OperationSelector} from "./OperationSelector";


class MyInput extends Component
{
    render() {
        return <input type="text" name="number1"

                      onChange={(event) =>
                      {
                          this.props.onInputEntered(event.target.value);
                      }
                      }/>
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {result : 0,}
        this.value1 = 0;
        this.value2 = 0;
        this.operator = OperationSelector.operator;
    };

    handleChangeValue1(value1)
    {
        this.value1 = value1;
    }
    handleChangeValue2(value2)
    {
        this.value2 = value2;
    }
    handleOperatorChange(operator)
    {
        this.operator = operator;
    }

    handleSubmit()
    {
        var res = this.operator(this.value1, this.value2);

        this.setState({result: res})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="body">
                    <div className="inputRow">
                        <label>
                            Number1:
                            <MyInput onInputEntered={(inputValue1)=>this.handleChangeValue1(inputValue1)}/>
                        </label>
                    </div>
                    <div className="inputRow">
                    <OperationSelector onOperatorChanged={(operator)=>this.handleOperatorChange(operator)}/>
                    </div>
                    <div className="inputRow">
                        <label>
                            Number2:
                            <MyInput onInputEntered={(inputValue2)=>this.handleChangeValue2(inputValue2)}/>
                        </label>
                    </div>
                    <div className="inputRow">
                        <button type="submit" onClick={()=>{this.handleSubmit()}}>
                            Compute
                        </button>
                    </div>
                    <div className="inputRow">
                        <label>
                            Result is : {this.state.result}
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
