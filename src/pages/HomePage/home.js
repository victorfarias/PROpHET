import React, {Component} from 'react';
import logo from './logo.png'
import splash from './splash.png'
import './home.css'

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
                            <button className="button portuguese">Português</button>
                            <button className="button espanol">Españhol</button>
                        </div>
                        <div className="row3">
                            <button className="button references">References</button>
                        </div>
                    </div>
                </div>

            </div>
            
            
                
                // <div className="circle">
                //     <div className="center">
                //         <div className="row1">
                //             <img className="logo" src={logo} alt=""/>
                //         </div>
                //         <div className="row2">
                //             <button>English</button>
                //             <button>Português</button>
                //             <button>Españhol</button>
                //         </div>
                //         <div className="row3">
                //         </div>
                //     </div>                                        
                // </div>
        )
    }
}

export default HomePage;

