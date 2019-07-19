import React, { Component } from 'react';
import { SplitSentence } from '../../helpers/StringExtensions';
import FormValidator from '../../helpers/FormValidator';
import SentenceTextControl from './SentenceTextControl';
import { ListGroupItem, Container, Row, Col } from 'reactstrap';

class Sentences extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.validator = new FormValidator([
            { field: 'value', method: this.matches, validWhen: true, message: 'Not correct.' }
        ]);

        const splitSentence = SplitSentence(this.props.sentence.text);
        
        this.state = {
            value: '',
            randomNum: Math.round(Math.random()),
            splitSentence: splitSentence,
            validation: this.validator.valid()
        };
    }

    matches = (value, state) => (state.randomNum > 0
                                    ? state.splitSentence.secondPart.toLowerCase() === value.toLowerCase()
                                    : state.splitSentence.firstPart.toLowerCase() === value.toLowerCase())

    handleChange(event) {
        const validation = this.validator.validate({
            value: event.target.value || '',
            randomNum: this.state.randomNum,
            splitSentence: this.state.splitSentence
        });

        this.setState({
            value: event.target.value || '',
            validation: validation
        });
    }

    renderControls(state, splitSentence, handleChange) {
        var { firstPart, secondPart } = splitSentence;
        if (state.randomNum > 0) {
            return (
                <Row>
                    <Col>
                        {this.getSpanControl(firstPart)}
                    </Col>
                    <Col>
                        {this.getTextControl(state, secondPart, handleChange)}
                    </Col>
                </Row>
            );
        } else {
            return (
                <Row>
                    <Col>
                        {this.getTextControl(state, firstPart, handleChange)}
                    </Col>
                    <Col>
                        {this.getSpanControl(secondPart)}
                    </Col>
                </Row>
            );
        }
    }

    getSpanControl(part) {
        return (
            <span>{part}</span>
        );
    }

    getTextControl(state, part, handleChange) {
        return (
            <Container>
                <SentenceTextControl
                    part={part}
                    type={"text"}
                    field={"value"}
                    value={state.value}
                    placeholder={"Enter the rest..."}
                    valid={state.validation.value.isInvalid}
                    message={state.validation.value.message}
                    onChange={handleChange} />
            </Container>
        );
    }

    render() {
        const { sentence } = this.props;
        const splitSentence = SplitSentence(sentence.text);

        if (sentence) {
            return (
                <ListGroupItem>
                    <Container>
                        {this.renderControls(this.state, splitSentence, this.handleChange)}
                    </Container>
                </ListGroupItem>
            );
        }

        return null;
    }
};

export default Sentences;