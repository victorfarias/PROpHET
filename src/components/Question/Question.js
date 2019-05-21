import React, {Component} from 'react';
import './Question.css';
// import man from '../../assets/man.svg'
import classNames from 'classnames'
import { connect } from 'react-redux';
// import { FormattedMessage } from "react-intl";
import messages from '../../messages';


class Question extends Component{
    render(){
        const {question, checked, disabled, changeChecked, changeDisabled, lang} = this.props;
        let classes = classNames({
            switch: true,
            // checked: true,
            disabled: disabled
        });
        
        return(
            <div className="question">
                <img src={this.props.src} alt=""/>
                <div className="texto">
                    <span>{messages[lang][question]}</span>
                    {/* <FormattedMessage id={question}></FormattedMessage> */}
                </div>
                <label className={classes} onChange={()=>changeChecked(question)}>
                    <input type="checkbox" defaultChecked={checked} />
                    <span className="slider"></span>
                </label>                
                <label className="container" onChange={()=>changeDisabled(question)}>Não disponível
                    <input type="checkbox" defaultChecked={disabled} />
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    }
}

const mapStateToProps = (state, props) =>{
    return{
        checked: state.answers[props.question].checked,
        disabled: state.answers[props.question].disabled,
        lang: state.locale.lang,
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        changeChecked: (question) => {dispatch({type: 'CHANGE_CHECKED', question})},
        changeDisabled: (question) => {dispatch({type: 'CHANGE_DISABLED', question})},
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);