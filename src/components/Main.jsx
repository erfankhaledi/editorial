import React from "react";
import "../styles.css"
import HeaderMain from "./HeaderMain";
import Banner from "./Banner";
import SeconedSection from "./SeconedSection";
import ThirdSection from "./ThirdSection";

export default function Main(){
    return (
        <div id="main">
            <div className="inner">
                <HeaderMain />
                <Banner />
                <SeconedSection />
                <ThirdSection />
            </div>
        </div>
    )
}