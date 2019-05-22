import React, {Component} from 'react';
import Question from '../../components/Question/Question'
import { Link } from 'react-router-dom';
import './QuizPage.css'

import man from '../../assets/man.svg'
import icecream from '../../assets/icecream.svg'
import mind from '../../assets/mind.svg'
import brain from '../../assets/brain.svg'
import heart from '../../assets/heart.svg'

class QuizPage extends Component{
    render(){
        return (
            <div className="quiz-container">
                <div className="inner-quiz">
                    <div className="quiz">
                        <Question question="male" src={man}/>
                        <Question question="glycemia" src={icecream}/>
                        <Question question="aspects" src={mind}/>
                        <Question question="acm" src={mind}/>
                        <Question question="microangiopathy" src={brain}/>
                        <Question question="lacunar_syndrome" src={brain}/>
                        <Question question="aortic_insufficiency" src={heart}/>
                        <Link className="evaluate" to='/result'>Evaluate</Link>
                    </div>                
                </div>                
            </div>                
        )
    }
}

export default QuizPage;