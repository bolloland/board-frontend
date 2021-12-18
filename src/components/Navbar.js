import React from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import "../styles.css"  

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div className="navbar">
            <h5>NAVBAR</h5>
        <button onClick={() => { navigate("/page1") }}>PAGE1</button>
        <button onClick={() => { navigate("/page2") }}>PAGE2</button>
        <button onClick={() => { navigate("/page3") }}>PAGE3</button>
        <button onClick={() => { navigate("/page4") }}>PAGE4</button>
        </div>
    )
}

    <Routes>
      <Route exact path="/page1" element={ <Page1  />}  />
      <Route exact path="/page2" element={ <Page2  />}  />
    </Routes>

export default Navbar
