import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import SensorScreen from './screens/Sensor/SensorScreen';
import DiseaseScreen from './screens/Disease/DiseaseScreen';
import GrowthScreen from './screens/Growth/GrowthScreen';

class Layout extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={ <SensorScreen/> } />
                        {/* <Route exact path="/selectSeed" element={ <SeedScreen/> } /> */}
                        <Route exact path="/disease" element={ <DiseaseScreen/> } />
                        <Route exact path="/growth" element={ <GrowthScreen/> } />
                        {/* <Route exact path="/fertilizer" element={ <FertilizerScreen/> } /> */}
                        {/* <Route exact path="/logout" element={ <Logout/> } /> */}
                    </Routes>
                </Router>
            </>
        )  
    }
}

export default Layout