import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearImage } from '../actions/getImagesAction'

class ImageViewer extends Component {
    render() {
        return (
            <div>
                {Object.entries(this.props.selectedImage).length === 0 ? 
                    <p>Plese Select an image.</p> :
                    <>
                        <img 
                            src={this.props.selectedImage.download_url}
                            key={this.props.selectedImage.id} alt={this.props.selectedImage.author}
                            height="100" width="100"
                        />
                        <button onClick={() => this.props.clearImage()}>Clear</button>
                    </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
    selectedImage: state.image.selectedImage
})

const mapDispatchToProps = {
    clearImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
