import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import AccumulatorsContainer from "./components/Accumulators/AccumulatorsContainer";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar'
import Swap from './components/Swap/Swap'
import AlarmContainer from "./components/Alarm/AlarmContainer";
import BatteryContainer from "./components/Battery/BatteryContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import SystemContainer from "./components/System/SystemContainer";

let App = () => {
    console.log(12314141)
    return (
        <BrowserRouter>
            <Container fluid className="App">
                {/*<Header/>*/}
                <Row className='contentRow'>
                    {/*<Navbar/>*/}
                    <Col xs={15}>
                        <Header/>
                    </Col>
                    <Col xs={4} className={"NavCol"}>
                        <Navbar/>
                    </Col>
                    <Col className={'MainCol'} xs={7} >
                        <Routes>
                            <Route path='/accumulators' element={<AccumulatorsContainer/>}/>
                            <Route path='/alarm' element={<AlarmContainer/>}/>
                            <Route path='/battery' element={<BatteryContainer/>}/>
                            <Route path='/settings' element={<SettingsContainer/>}/>
                            <Route path='/system' element={<SystemContainer/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
