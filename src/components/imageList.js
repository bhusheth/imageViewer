import React from 'react'
import { connect } from 'react-redux';
import { getImgaes, viewImage } from '../actions/getImagesAction';
import { Image } from 'react-bootstrap';

// This component will dispatch an action which saga will call put with another action which
// will store the data from the api and it will loop it here.

const ImageList = (props) => {
        return (
            <div className="left-col">
                <h3 style={{textAlign: 'center', margin: '20px'}}>Image List</h3>
                {props.images != null &&
                    props.images.map(image => {
                    return (
                        <div key={image.id} style={{textAlign: 'center', padding: '10px'}}>
                            <Image 
                                src={image.download_url}
                                key={image.id} alt={image.author}
                                height="200" width="300"
                                onClick={() => props.viewImage(image)}
                            />
                        </div>
                    )
                })}
            </div>
        )
}

const mapStateToProps = (state) => ({
    images: state.image.images.data,
})

const mapDispatchToProps = {
    getImgaes,
    viewImage
  }

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
