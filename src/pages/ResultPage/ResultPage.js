import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import "./ResultPage.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import portuguese from "../../assets/Portugues.png";
import english from "../../assets/English.png";
import spanish from "../../assets/Spanish.png";

class ResultPage extends Component {
    constructor(props, context) {
        
        super(props, context);
        let table = null;
        if(props.lang == 'en'){
            table = english;
        }else if(props.lang == 'pt'){
            table = portuguese;
        }else{
            table = spanish;
        }

        this.state = {
            showModal: false,
            table,
        };
    }
    openModal = event => {
        event.preventDefault();
        this.setState({ showModal: true });
    };
    closeModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        const { probability, score, odds, hasDisabled } = this.props;
        return (
            <div className="result-container">
                <NavBar />
                <div className="result-inner-container">
                    <div className="results">
                        <div className="panel large centralized my-5">
                            <FormattedMessage id="result" />
                        </div>
                        {/* <div className="result-item my-5">
                            <div className="panel large">
                                <FormattedMessage id="total" />
                            </div>
                            <div className="result-value">{score}</div>
                        </div>
                        <div className="result-item my-5">
                            <div className="panel large">
                                <FormattedMessage id="odd" />
                            </div>
                            <div className="result-value">
                                {odds.toFixed(2)}
                            </div>
                        </div> */}
                        <div className="result-item my-5">
                            <div className="panel large green">
                                <FormattedMessage id="likelihood" />
                            </div>
                            <div className="result-value red">
                                {(probability * 100).toFixed(0)}%
                            </div>
                        </div>
                        <div className="alert alert-success">
                            <b>Information:</b> <br />
                            Accuracy 81.3% <br />
                            Area Under Curve (AUC) 0.84 (0.79-0.88) <br />
                            Sensibility 33% <br />
                            Specificity 94% <br />
                            Brier score 0.1 <br />
                            Hosmer-Lemeshow 0.45 <br />
                        </div>
                        {hasDisabled && (
                            <div className="alert warning">
                                <FormattedHTMLMessage id="result.warning" />
                            </div>
                        )}
                        {score >= 3 && (
                            <div className="alert">
                                <FormattedHTMLMessage id="result.alert" />{" "}
                                <br />
                                <Button
                                    variant="info"
                                    className="px-5"
                                    onClick={this.openModal}
                                >
                                    Info
                                </Button>
                                <Modal
                                    size="lg"
                                    show={this.state.showModal}
                                    onHide={this.closeModal}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>                                            
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <img
                                            className="table"
                                            src={this.state.table}
                                            alt=""
                                        />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={this.closeModal}
                                        >
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )}
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-primary btn-lg btn-block btn-primary"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let hasDisabled = false;
    let questions_score = state.questions.reduce((obj, question) => {
        if (state.answers[question].disabled) {
            obj[question] = 0;
            hasDisabled = true;
        } else {
            obj[question] = state.answers[question].value;
        }
        return obj;
    }, {});
    let score =
        1 * questions_score.male +
        1 * (questions_score.glycemia >= 180 ? 1 : 0) +
        2 * (questions_score.aspects <= 7 ? 1 : 0) +
        1 * questions_score.acm +
        1 * questions_score.microangiopathy -
        3 * questions_score.lacunar_syndrome +
        1 * questions_score.aortic_insufficiency;
    let or = 0;
    switch (score) {
        case -3:
            or = 0;
            break;
        case -2:
            or = 0;
            break;
        case -1:
            or = 0;
            break;
        case 0:
            or = 0.09;
            break;
        case 1:
            or = 0.27;
            break;
        case 2:
            or = 0.79;
            break;
        case 3:
            or = 2.27;
            break;
        case 4:
            or = 3.3;
            break;
        case 5:
            or = 6.9;
            break;
        case 6:
            or = 6.9;
            break;
        case 7:
            or = 6.9;
            break;
        default:
            or = 0;
    }

    let questions_prob = state.questions.reduce((obj, question) => {
        if (state.answers[question].disabled) {
            obj[question] = 0;
        } else {
            obj[question] = state.answers[question].value;
        }
        return obj;
    }, {});
    let g =
        -0.852 +
        1.25 * questions_prob.male +
        0.008 * questions_prob.glycemia -
        0.407 * questions_prob.aspects +
        0.822 * questions_prob.acm +
        0.626 * questions_prob.microangiopathy -
        2.193 * questions_prob.lacunar_syndrome +
        1.066 * questions_prob.aortic_insufficiency;
    let probability = 1 / (1 + Math.pow(Math.E, -g));
    console.log(questions_score);
    console.log(questions_prob);
    return {
        probability,
        score,
        odds: or,
        hasDisabled,
        lang: state.locale.lang
    };
};
export default connect(mapStateToProps)(ResultPage);
