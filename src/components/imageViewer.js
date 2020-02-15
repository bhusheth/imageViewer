import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { clearImage } from '../actions/getImagesAction';
import { Image, Row, Col } from 'react-bootstrap';
import '../App.css'

// This component will check for selected image if there is no image selected it will
// populate no item selected and if there is one it will show the image with option to clear.

const ImageViewer = (props) => {
        return (
            <div>
                {Object.entries(props.selectedImage).length === 0 ? 
                    <p>No image selected.</p> :
                    <>
                        <Col style={{ alignItems: 'center'}}>
                            <div
                                style={{
                                    marginLeft: '20px'
                                }}
                            >
                                <h3>{props.selectedImage.author}</h3>
                                <Image 
                                    src={props.selectedImage.download_url}
                                    key={props.selectedImage.id} alt={props.selectedImage.author}
                                    height="200" width="300"
                                />         
                            </div>
                            <Row className='clear-button-margin'>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => props.clearImage()}
                                    size='lg'
                                >
                                    Clear
                                </Button>
                            </Row>
                        </Col>
                    </>
                }
            </div>
        )
}

const mapStateToProps = state => ({
    state,
    selectedImage: state.image.selectedImage
})

const mapDispatchToProps = {
    clearImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
