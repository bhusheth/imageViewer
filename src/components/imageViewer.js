import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { clearImage } from '../actions/getImagesAction';
import { Image, Row, Col } from 'react-bootstrap';
import '../App.css'

class ImageViewer extends Component {
    render() {
        return (
            <div>
                {Object.entries(this.props.selectedImage).length === 0 ? 
                    <p>No image selected.</p> :
                    <>
                        <Col style={{ alignItems: 'center'}}>
                            <div
                                style={{
                                    marginLeft: '20px'
                                }}
                            >
                         
                                    <h3>{this.props.selectedImage.author}</h3>
                          
                                
                                <Image 
                                    src={this.props.selectedImage.download_url}
                                    key={this.props.selectedImage.id} alt={this.props.selectedImage.author}
                                    height="200" width="300"
                                />         
                            </div>
                            <Row className='clear-button-margin'>
                                <Button
                                    variant="outline-primary"
                                    onClick={() => this.props.clearImage()}
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
}

const mapStateToProps = state => ({
    state,
    selectedImage: state.image.selectedImage
})

const mapDispatchToProps = {
    clearImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
