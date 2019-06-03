import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
    render = () => {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark main-nav py-3">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        PROpHET
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon" />
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                    >
                        <ul class="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    Home <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Publications
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

export default NavBar;
