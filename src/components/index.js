import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getImgaes } from '../actions/getImagesAction'
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    componentDidMount() {
        this.props.getImgaes();
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        )
    }
}

const mapDispatchToProps = {
    getImgaes
  }

export default connect(null, mapDispatchToProps)(App);
