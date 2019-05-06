import React, {Component} from 'react';
import './Question.css';
import man from '../../assets/man.svg'
import classNames from 'classnames'


class Question extends Component{
    state = {
        answer: false,
        disabled: false
    }
    handleSwitch = (e) =>{
        this.setState({
            answer: e.target.checked,
            // disabled: false
        })
    }
    handleDisabled = (e) =>{
        this.setState({
            disabled: e.target.checked
        })
    }
    render(){
        let classes = classNames({
            switch: true,
            disabled: this.state.disabled
        })
        return(
            <div className="question">
                <img src={man} alt=""/>
                <div className="texto">
                    <span>Sexo Masculino</span>
                </div>
                <label className={classes}>
                    <input type="checkbox" onChange={this.handleSwitch}/>
                    <span className="slider"></span>
                </label>                
                <label className="container">Não disponível
                    <input type="checkbox" onChange={this.handleDisabled} />
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    }
}

export default Question;