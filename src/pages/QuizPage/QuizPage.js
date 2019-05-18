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
                        <Question question="male" src={man} text="Sexo Masculino"/>
                        <Question question="glycemia" src={icecream} text="Glicemia Admissional &ge; 180mg/dL"/>
                        <Question question="aspects" src={mind} text="ASPECTS admissional &le; 7"/>
                        <Question question="acm" src={mind} text="Sinal de ACM hiperdensa"/>
                        <Question question="microangiopathy" src={brain} text="Microangiopatia"/>
                        <Question question="lacunar_syndrome" src={brain} text="Síndrome Lacunar"/>
                        <Question question="aortic_insufficiency" src={heart} text="Etiologia Cárdio-aórtica"/>
                        <Link className="evaluate" to='/result'>Evaluate</Link>
                    </div>                
                </div>                
            </div>                
        )
    }
}

export default QuizPage;