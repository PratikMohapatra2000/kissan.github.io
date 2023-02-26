import React, { Component } from 'react';

import './GrowthDetectStyle.css';

class GrowthDetectBox extends Component {
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
                        <h1 className="display-4 heading">Growth Detection</h1>
                        <p>From here you can detect growth of your plant just by uploading plant image.</p>
                        <p><strong>Note:</strong> Please upload a clearly visible full image of your plant for better performance.</p>
                    </div>
                    <div className="row">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className='container imageUploadContainer' id='imgBox'>
                                        <input type="file" accept='image/*' id='file' onChange={ this.handleChange }/>
                                        <label htmlFor="file"><img src={require("./images/uploadIconBlue.png")} className='upload-icon' /></label>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Detected Growth</h5>
                                    <p className="card-text">
                                        <strong>Booting</strong>
                                        Booting is the period during which growth and
                                        development of a panicle and its constituent parts
                                        are completed inside the sheath of the flag leaf. The
                                        sheath of the flag leaf is the boot. Booting stages
                                        are classified according to visible development of
                                        the panicle without dissection. For convenience, it is
                                        divided into three stages: early, middle and late boot.
                                        It is based on the amount of flag leaf sheath exposed
                                        above the collar of the leaf from which it emerges,
                                        the penultimate (second to last) leaf. Early boot
                                        (Fig. 4-14) is recognized when the collar of the flag
                                        leaf first appears above the collar of the penultimate
                                        leaf on the main stem and lasts until the collar of
                                        the flag leaf is about 2 inches above the collar of the
                                        penultimate leaf. Middle boot occurs when the collar
                                        of the flag leaf is 2 to 5 inches above the collar of the
                                        penultimate leaf and late boot when the collar of the
                                        flag leaf is 5 or more inches above the collar of the
                                        penultimate leaf
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

export default GrowthDetectBox
