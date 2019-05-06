import React, {Component} from 'react';
import Question from '../../components/Question/Question'
import './QuizPage.css'

class QuizPage extends Component{
    render(){
        return (
            <div className="quiz-container">
                <div className="inner-quiz">
                    <div className="quiz">
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <div className="evaluate">Avaliar</div>
                    </div>
                
                </div>
                
            </div>                
        )
    }
}

export default QuizPage;