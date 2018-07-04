import React, {Component} from "react";
import {myFunctionAdd, myFunctionDiv, myFunctionMult, myFunctionSub} from "./Operators";

export class OperationSelector extends Component {
    constructor(props) {
        super(props);
    }

    changeOperation(op)
    {
        this.props.onOperatorChanged(op);
    }

    render() {
        return <div className="OperationSelector">
            <button onClick={() => {this.changeOperation(myFunctionAdd)}}>+</button>
            <button onClick={() => {this.changeOperation(myFunctionSub)}}>-</button>
            <button onClick={() => {this.changeOperation(myFunctionMult)}}>*</button>
            <button onClick={() => {this.changeOperation(myFunctionDiv)}}>/</button>
        </div>
    }
}
