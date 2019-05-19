import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import splash from '../../assets/splash.png';
import { withRouter } from 'react-router-dom'
import './HomePage.css'


function HomePage(props){    
    const { history, changeLanguage } = props;   
    let onClick = (lang) => {
        changeLanguage(lang);
        history.push('/quiz')
    }
    
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
                        <button onClick={()=>{onClick('en')}} className="button english">English</button>
                        <button onClick={()=>{onClick('pt')}} className="button portuguese">Português</button>
                        <button onClick={()=>{onClick('es')}} className="button espanol">Españhol</button>
                    </div>
                    <div className="row3">
                        <button className="button references">References</button>                            
                    </div>                        
                </div>
            </div>
        </div>                
    )

}

const mapDispatchToProps = (dispatch) => {
    return({
        changeLanguage: (lang) => {dispatch({type: 'CHANGE_LOCALE', lang})},
    })
}


export default withRouter(connect(()=>({}), mapDispatchToProps)(HomePage));