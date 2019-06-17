import React, {Component} from 'react';
import Question from '../../components/Question/Question'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import './QuizPage.css'

import man from '../../assets/man.svg'
import icecream from '../../assets/icecream.svg'
import mind from '../../assets/mind.svg'
import brain from '../../assets/brain.svg'
import heart from '../../assets/heart.svg'
import NavBar from '../../components/NavBar/NavBar';

class QuizPage extends Component{
    render(){
        return (
            <div className="quiz-container">
                <NavBar></NavBar>
                <div className="inner-quiz">
                    <div className="quiz">
                        <Question question="male" src={man}/>
                        <Question question="glycemia" src={icecream}/>
                        <Question question="aspects" src={mind}/>
                        <Question question="acm" src={mind}/>
                        <Question question="microangiopathy" src={brain}/>
                        <Question question="lacunar_syndrome" src={brain}/>
                        <Question question="aortic_insufficiency" src={heart}/>
                        <Link className="evaluate my-5" to='/result'><FormattedMessage id='evaluate'></FormattedMessage></Link>
                    </div>                
                </div>                
            </div>                
        )
    }
}

export default QuizPage;