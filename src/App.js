import React from "react";
import "./App.css";

export default class Calculadora extends React.Component {
  state = {
    n1: null,
    n2: null,
    result: [ ],
  };

  minus = () => {
    this.setState({
      result: this.state.n1 - this.state.n2,
    });
  };

  add = () => {
    this.setState({
      result: Number(this.state.n1) + Number(this.state.n2),
    });
  };

  multiply = () => {
    this.setState({
      result: this.state.n1 * this.state.n2,
    });
  };

  division = () => {
    this.setState({
      result: this.state.n1 / this.state.n2,
    });
  };

  reset = () => {
    this.setState({
      n1: null,
      n2: null,
      result: [ ],
    })
    return(
      this.input.value = null ,
      document.getElementById("input2").value = null 
    )
  }

  handleChange = (e) => {
    this.setState({
      n1: e.target.value,
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: e.target.value,
      
    });
  };

  render() {
    return (
      <div className="calculator_body">
        <div className="box">
          <div className="result">
            <h2>{this.state.result}</h2>
          </div>
          <div className="inputs_box">
          <input ref={(el) => this.input = el} onChange={this.handleChange} name="number" type="number" />
          <input id="input2"  onChange={this.handleChange2} name="number" type="number" />
          </div>
        </div>
        <div>
          <div className="buttons">
            <button onClick={this.minus}>-</button>
            <button onClick={this.add}>+</button>
            <button onClick={this.multiply}>X</button>
            <button onClick={this.division}>/</button>
            <button onClick={this.reset} >C</button>
          </div>
        </div>
      </div>
    );
  }
}
