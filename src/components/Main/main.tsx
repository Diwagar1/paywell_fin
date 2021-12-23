import FlexBox from "@component/FlexBox";
import Header from "@component/header/Header";
// import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Main_propertie from "./mainStyle";
import 'bootstrap/dist/css/bootstrap.css'; 
const MainComponent=()=>{
    
        return (
            <Main_propertie className="main-bar main_bar_scale pt-5m mt-5" >
        {/* <h1>Main Page</h1> */}
    <Container className="Main_contents side_content mt-5" >
        {/* <div className="row Row_style"> */}
        <Row>
            <Col xl="6" lg="6" md="6" sm="12" className="boxes mt-5">
                <div className="small_box_1"></div>
                <div className="rect"></div>
                <div className="gray-rectangle"></div>
                <div className="box_1 ml-3">
                    <img src="assets\images\Clock.png" alt=""></img>
                    <h6>30 Seconds</h6>
                    <label>payouts</label>
                </div>
                <div className="box_2 ml-3">
                    <div className="small_box_2"></div>
                    <img src="assets\images\Clock.png" alt=""></img>
                    <h6>10 Minutes</h6>
                    <label>To Sell</label>
                </div>
                <div className="rect_2"></div>
                <div className="box_3 ml-5">
                    <div className="small_box_3"></div>
                    <img src="assets\images\Commission.svg" alt=""></img>
                    <h6>0%</h6>
                    <label>Commission</label>

                </div>

                <div className="box_4 ml-5">
                    <div className="small_box_4"></div>
                    <img src="assets\images\Dollar.png" alt=""></img>
                    <h6 >0</h6>
                    <label>Gas Fee</label>
                </div>
            </Col>
            <Col xl="6" lg="6" md="6" sm="7" className="Get-started " line-height="1.1">
                <p className="welcome">WELCOME TO SELLWALL</p>
                <p className="Digital_product product_style">Sell<span  className="Anycolor" > Any Digital Products</span><br></br>For Crypto</p>
                <p className="Crypto"  >No Email, no credit card, It's wallet to wallet commerce.
                </p>
                <button className="Main_btn px-4 blue-b" type="submit"> Get Started </button>
            </Col>
        {/* </div> */}
        </Row>
        </Container> 
        </Main_propertie>
)
    
}
        
export default MainComponent
