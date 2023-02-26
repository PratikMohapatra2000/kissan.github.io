import React, { Component } from 'react';
import './SensorStyle.css'
import './SensorScreenMove.js'

class SensorScreen extends Component {
    render() {
        return (
            <>
                <div className="container py-5">
                    <div className='row'>
                        <h1 className="display-4 heading">Sensor Readings</h1>
                        <p><strong>Note:</strong> It is the actual readings of your IOT Device. From here you can monitor the device.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 mb-4 abc">
                            <div className="bg-white rounded-lg p-5 shadow">
                                <h2 className="h6 font-weight-bold text-center mb-4">Temperature</h2>
                    
                                {/* Progress bar 1 */}
                                <div className="progress mx-auto" data-value='80'>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary"></span>
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">80<sup class="small">%</sup></div>
                                    </div>
                                </div>
                
                                {/* Demo info */}
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Actual</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Needed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-xl-3 col-lg-6 mb-4 abc">
                            <div className="bg-white rounded-lg p-5 shadow">
                                <h2 className="h6 font-weight-bold text-center mb-4">Humidity</h2>
                        
                                {/* Progress bar 2 */}
                                <div className="progress mx-auto" data-value='25'>
                                    <span className="progress-left">
                                                <span className="progress-bar border-danger"></span>
                                    </span>
                                    <span className="progress-right">
                                                <span className="progress-bar border-danger"></span>
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold">25<sup class="small">%</sup></div>
                                    </div>
                                </div>
                    
                                {/* Demo info */}
                                <div class="row text-center mt-4">
                                    <div class="col-6 border-right">
                                    <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Actual</span>
                                    </div>
                                    <div class="col-6">
                                    <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Needed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-xl-3 col-lg-6 mb-4 abc">
                            <div class="bg-white rounded-lg p-5 shadow">
                                <h2 class="h6 font-weight-bold text-center mb-4">Rainfall</h2>
                        
                                {/* Progress bar 3 */}
                                <div class="progress mx-auto" data-value='76'>
                                    <span class="progress-left">
                                                <span class="progress-bar border-success"></span>
                                    </span>
                                    <span class="progress-right">
                                                <span class="progress-bar border-success"></span>
                                    </span>
                                    <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div class="h2 font-weight-bold">76<sup class="small">%</sup></div>
                                    </div>
                                </div>
                                
                                {/* Demo info */}
                                <div class="row text-center mt-4">
                                    <div class="col-6 border-right">
                                    <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Actual</span>
                                    </div>
                                    <div class="col-6">
                                    <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Needed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="col-xl-3 col-lg-6 mb-4 abc">
                            <div class="bg-white rounded-lg p-5 shadow">
                                <h2 class="h6 font-weight-bold text-center mb-4">Soil Moisture</h2>
                        
                                {/* Progress bar 4 */}
                                <div class="progress mx-auto" data-value='12'>
                                    <span class="progress-left">
                                                <span class="progress-bar border-warning"></span>
                                    </span>
                                    <span class="progress-right">
                                                <span class="progress-bar border-warning"></span>
                                    </span>
                                    <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div class="h2 font-weight-bold">12<sup class="small">%</sup></div>
                                    </div>
                                </div>
                                
                                {/* Demo info */}
                                <div class="row text-center mt-4">
                                    <div class="col-6 border-right">
                                    <div class="h4 font-weight-bold mb-0">28%</div><span class="small text-gray">Actual</span>
                                    </div>
                                    <div class="col-6">
                                    <div class="h4 font-weight-bold mb-0">60%</div><span class="small text-gray">Needed</span>
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


export default SensorScreen