import React, { Component } from 'react';

import './DiseaseDetectStyle.css';

class DiseaseDetectBox extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        var imgBox = document.getElementById("imgBox");
        imgBox.style.backgroundImage = this.state.file;
    }
    render() {
        return (
            <>
                <div className="container py-5">
                    <div className='row'>
                        <h1 className="display-4 heading">Disease Detection</h1>
                        <p>From here you can detect anykind of disease occured in your plant just by uploading plant image.</p>
                        <p><strong>Note:</strong> Please upload a clearly visible image for better performance.</p>
                    </div>
                    <div className="row">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    {/* <img src="../../../public/images/riceDisease.jpg"/> */}
                                    <div className='container imageUploadContainer' id='imgBox'>
                                        <input type="file" accept='image/*' id='file' onChange={ this.handleChange }/>
                                        <label htmlFor="file"><img src={require("./images/uploadIconBlue.png")} className='upload-icon' /></label>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Detected Disease</h5>
                                    <p className="card-text">
                                        It is caused by a filamentous ascomycete fungus Magnaporthe oryzae. 
                                        It infects all the developmental stage of plant and produce symptoms on the leaf, collar, neck, panicle and even in the glumes. 
                                        It decreases the rice production by an amount, enough to feed 60 million people every year. 
                                        Cloudy weather, high relative humidity (93-99%), low night temperature (15-20°C), 
                                        longer duration of dew is the most favorable condition for the outbreak of disease. 
                                    </p>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary btn1" type="button">More</button>
                                        <button className="btn btn-primary btn2" type="button">How to Overcome ?</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )  
    }
}

export default DiseaseDetectBox
