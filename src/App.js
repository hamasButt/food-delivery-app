import React from 'react'
import './app.css'
import Header from "./components/header/Header";
import {MiddleContentCont} from "./components/middle-content/MiddleContentCont";
import {FooterMenu} from "./components/footer/FooterMenu";

const App = () => {


    return (
        <div className="app">
            <Header/>
            <MiddleContentCont/>
            <FooterMenu/>
        </div>
    );
}
export default App


