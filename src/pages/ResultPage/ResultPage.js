import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import './ResultPage.css'

class ResultPage extends Component{
    render(){
        const { probability, score, odds } = this.props;
        return(            
            <div className="result-container">
                <div className="result-inner-container">
                    <div className="results">
                        <div className="panel large">
                            <FormattedMessage id='result'></FormattedMessage>
                            </div>
                        <div className="result-item">
                            <div className="panel large">
                                <FormattedMessage id="total"></FormattedMessage>
                            </div>
                            <div className="result-value">{score}</div>
                        </div>
                        <div className="result-item">
                            <div className="panel large">
                                <FormattedMessage id="odd"></FormattedMessage>
                            </div>
                            <div className="result-value">{odds}</div>
                        </div>
                        <div className="result-item">
                            <div className="panel large green">
                                <FormattedMessage id="likelihood"></FormattedMessage>                                
                            </div>
                            <div className="result-value red">{(probability*100).toFixed(0)}%</div>
                        </div>
                        {score >= 3 &&
                            <div className="alert">
                                <b>Alerta: Pontuação Total maior que 3 </b> <br/>
                                Sensibilidade: 74.7% <br/> 
                                Especificidade 76.5% <br/>
                                Sensibilidade para TH Sintomática: 80% <br/>
                                Especificidade para TH Sintomática: 77% <br/>
                                Odss Ratio para TH Geral: 9.6 (95% CI 5.69-16.25, p &lt; 0.001) <br/>
                                OR para TH sintomática: 12.7 (95% CI 6-27.6, p &lt; 0.001)
                            </div>
                        }                        
                    </div>                    
                </div>
            </div>
        )  
    }
}

const mapStateToProps = (state) =>{
    let questions_score = state.questions.reduce(
        (obj, question) => {         
            if(state.answers[question].disabled){
                obj[question] = 0;
            }else{
                obj[question] = +state.answers[question].checked;
            }            
            return obj;
        }, {});
    let score = 1*questions_score.male + 1*questions_score.glycemia +
        2*questions_score.aspects + 2*questions_score.acm + 
        1*questions_score.microangiopathy -2*questions_score.lacunar_syndrome +
        1*questions_score.aortic_insufficiency;

    let questions_prob = state.questions.reduce(
        (obj, question) => {
            if(state.answers[question].disabled){
                obj[question] = 0;
            }else{
                if(state.answers[question].checked){
                    obj[question] = 1;
                }else{
                    obj[question] = -1;
                }
            }            
            return obj;
        }, {});
    let g = -2.535 + 1.153*questions_prob.male + 1.366*questions_prob.glycemia +
                1.602*questions_prob.aspects + 0.814*questions_prob.acm + 
                0.645*questions_prob.microangiopathy - 2.219*questions_prob.lacunar_syndrome +
                1.257*questions_prob.aortic_insufficiency;
    let probability = 1/(1+Math.pow(Math.E, -g))
    return{
        probability,
        score,
        odds: (score+2)*1.38,
    }
}
export default connect(mapStateToProps)(ResultPage);