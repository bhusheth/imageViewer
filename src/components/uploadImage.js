import React, { Component } from 'react'
import { connect } from 'react-redux';
import { viewImage, addImage } from '../actions/getImagesAction'

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    handleChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        const selectedImage = {
            author: 'Local Upload',
            download_url: this.state.file,
            id: Math.random() * 10
        }
        this.props.addImage(selectedImage);
    }

    render() {
        return (
            <div>
                <input type='file' onChange={this.handleChange}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    viewImage,
    addImage
}

export default connect(null, mapDispatchToProps)(UploadImage);
