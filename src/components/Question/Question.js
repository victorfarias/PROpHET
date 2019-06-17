import React, { Component } from "react";
import "./Question.css";
import classNames from "classnames";
import { connect } from "react-redux";
import { FormattedHTMLMessage } from "react-intl";
import messages from "../../messages";
import { Modal, Button } from "react-bootstrap";

class Question extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false
        };
    }
    openModal = () => {
        console.log("open");
        this.setState({ showModal: true });
    };
    closeModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        const {
            question,
            checked,
            disabled,
            changeChecked,
            changeDisabled,
            lang
        } = this.props;
        let classes = classNames({
            switch: true,
            // checked: true,
            disabled: disabled
        });

        return (
            <div className="my-4 question">
                <img src={this.props.src} alt="" />
                <div onClick={this.openModal} className="texto">
                    <span>{messages[lang][question]}</span>
                    {/* <FormattedMessage id={question}></FormattedMessage> */}
                </div>
                <div className="group">
                    <label
                        className={classes}
                        onChange={() => changeChecked(question)}
                    >
                        <input type="checkbox" defaultChecked={checked} />
                        <span className="slider" />
                    </label>
                    <label
                        className="checkmark-container"
                        onChange={() => changeDisabled(question)}
                    >
                        <span className="big">Não disponível</span>
                        <span className="small">N/A</span>
                        <input type="checkbox" defaultChecked={disabled} />
                        <span className="checkmark" />
                    </label>
                </div>
                <Modal size="lg" show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{messages[lang][question]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormattedHTMLMessage id={question+".description"}></FormattedHTMLMessage>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        checked: state.answers[props.question].checked,
        disabled: state.answers[props.question].disabled,
        lang: state.locale.lang
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeChecked: question => {
            dispatch({ type: "CHANGE_CHECKED", question });
        },
        changeDisabled: question => {
            dispatch({ type: "CHANGE_DISABLED", question });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
