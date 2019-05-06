import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import splash from '../../assets/splash.png';
import { Link, NavLink } from 'react-router-dom';
import './HomePage.css'

class HomePage extends Component{
    render(){
        return (
            <div className="home-container">                            
                <div className="splash-background">
                    <img src={splash} alt=""/>
                </div>
                <div className="circle">                    
                    <div className="menu">
                        <div className="row1">
                            <img className="logo" src={logo} alt=""/>
                        </div>
                        <div className="row2">
                            <button className="button english">English</button>
                            <Link to='/quiz' className="button portuguese">Português</Link>
                            <button className="button espanol">Españhol</button>
                        </div>
                        <div className="row3">
                            <button className="button references">References</button>                            
                        </div>                        
                    </div>
                </div>
            </div>                
        )
    }
}

export default HomePage;