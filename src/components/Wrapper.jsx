import React from "react";
import Main from "./Main"
import Sidebar from "./Sidebar";

export default function Wrapper(){
    return(
        <div id="wrapper">
           <Main />
           <Sidebar />
        </div>
    )
}