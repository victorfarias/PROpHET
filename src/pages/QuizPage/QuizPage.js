import React, {Component} from 'react';
import Question from '../../components/Question/Question'
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
                        <Question src={man} text="Sexo Masculino"/>
                        <Question src={icecream} text="Glicemia Admissional &ge; 180mg/dL"/>
                        <Question src={mind} text="ASPECTS admissional &le; 7"/>
                        <Question src={mind} text="Sinal de ACM hiperdensa"/>
                        <Question src={brain} text="Microangiopatia"/>
                        <Question src={brain} text="Síndrome Lacunar"/>
                        <Question src={heart} text="Etiologia Cárdio-aórtica"/>
                        <div className="evaluate">Avaliar</div>
                    </div>
                
                </div>
                
            </div>                
        )
    }
}

export default QuizPage;