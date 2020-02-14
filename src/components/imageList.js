import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getImgaes, viewImage } from '../actions/getImagesAction';
import { Image } from 'react-bootstrap';

class ImageList extends Component {
    render() {
        return (
            <div className="left-col">
                <h3 style={{textAlign: 'center', margin: '20px'}}>Image List</h3>
                {this.props.images != null &&
                    this.props.images.map(image => {
                    return (
                        <div key={image.id} style={{textAlign: 'center', padding: '10px'}}>
                            <Image 
                                src={image.download_url}
                                key={image.id} alt={image.author}
                                height="200" width="300"
                                onClick={() => this.props.viewImage(image)}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    images: state.image.images.data,
    selectedImage: state.image.selectedImage
})

const mapDispatchToProps = {
    getImgaes,
    viewImage
  }

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
