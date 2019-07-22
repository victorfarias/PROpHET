import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./AboutPage.css"
import logo from "../../assets/logo.png"
import capes from "../../assets/capes.jpg"

function AboutPage(props){
    return(
        <div className="about-container">
            <NavBar activePage="about"/>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt=""/>
                </div>
                <div className="text">
                    <h1 className="my-5">About</h1>
                    <span className="py-4">Application developed by Victor Farias and Joao Brainer Clares de Andrade</span>
                    <span className="py-2">In association with Hospital Geral de Fortaleza (Brazil) 
                    and Universidade Federal de Sao Paulo (Brazil) </span>

                    <b className="py-2">This project is financed in part by the Coordenação de Aperfeiçoamento de Pessoal de
                    Nível Superior - Brasil (CAPES) - Finance Code 001 / 88881.189495/2018-01</b>
                    <img src={capes} alt=""/>
                </div>
            </div>            
        </div>
        
    )
}

export default AboutPage;