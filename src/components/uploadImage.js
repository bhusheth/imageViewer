import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions/getImagesAction'

// Functionality of this component it to browse image and store it into redux store.

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    handleChange = (event) => {
        if (event.target.files[0] != null) {
            const selectedImage = {
                author: event.target.files[0].name,
                download_url: URL.createObjectURL(event.target.files[0]),
                id: Math.random() * 10
            }
            this.props.addImage(selectedImage);
        }
        
    }

    render() {
        return (
            <div style={{margin: '30px'}}>
                <input type='file' 
                    onChange={this.handleChange}
                    accept="image/x-png,image/gif,image/jpeg"
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    addImage
}

export default connect(null, mapDispatchToProps)(UploadImage);
