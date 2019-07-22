import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisclaimerPage.css";
import logo from "../../assets/logo.png";

function DisclaimerPage(props) {
    return (
        <div className="about-container">
            <NavBar activePage="disclaimer" />
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <div className="text">
                    <h1 className="my-5">The Disclaimer</h1>
                    <span className="py-4">
                        This application is made available by Universidade
                        Federal de Sao Paulo (Brazil) and Hospital Geral de
                        Fortaleza (Brazil), in collaboration with staff of
                        Universidade Federal do Ceara (Brazil) and Columbia
                        University (USA), solely for personal non-commercial,
                        teaching and educational use. This application is not a
                        medical device and does not and should not be construed
                        to provide health-related or medical advice, or clinical
                        decision support, or to support or replace the
                        diagnosis, or other kind of medical decision. This
                        application does not create a physician-patient
                        relationship between the above-mentioned institutions
                        and any individual. You, the user, agree to use this
                        application under understanding about all these terms
                        and conditions.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DisclaimerPage;
