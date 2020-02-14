import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getImgaes } from '../actions/getImagesAction';
import ImageList from './imageList';
import ImageViewer from './imageViewer';
import '../App.css';

class App extends Component {
    componentDidMount() {
        this.props.getImgaes();
    }
    render() {
        return (
          <div className="App">
              <ImageViewer />
              <ImageList />
          </div>
        )
    }
}

const mapDispatchToProps = {
    getImgaes,
  }

export default connect(null, mapDispatchToProps)(App);
