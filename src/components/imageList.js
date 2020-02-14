import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getImgaes, viewImage } from '../actions/getImagesAction';

class ImageList extends Component {
    render() {
        return (
            <div>
                {this.props.images != null &&
                    this.props.images.map(image => {
                    return (
                        <div key={image.id}>
                            <img 
                                src={image.download_url}
                                key={image.id} alt={image.author}
                                height="100" width="100"
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
