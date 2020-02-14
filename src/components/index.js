import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getImgaes } from '../actions/getImagesAction';
import ImageList from './imageList';
import ImageViewer from './imageViewer';
import '../App.css';
import Header from './header';
import UploadImage from './uploadImage';
import Footer from './footer';

class App extends Component {
    componentDidMount() {
        this.props.getImgaes();
    }
    render() {
        return (
          <div>
            <div>
              <Header />
            </div>
            <div className='image-list'>
              <div className='left-col'>
                <ImageList />
              </div>
              <div className='right-col'>
                <UploadImage />
                <ImageViewer />
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </div>
        )
    }
}

const mapDispatchToProps = {
    getImgaes,
  }

export default connect(null, mapDispatchToProps)(App);
