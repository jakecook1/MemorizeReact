import React, { Component } from 'react';
import { SplitSentence } from '../../helpers/StringExtensions';
import { RandomIntFromInterval } from '../../helpers/IntExtensions';
import FormValidator from '../../helpers/FormValidator';
import SentenceTextControl from './SentenceTextControl';
import SentenceBits from './SentenceBits';
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
            randomNum: RandomIntFromInterval(0, 2),
            splitSentence: splitSentence,
            validation: this.validator.valid()
        };
    }

    matches = (value, state) => { 
        switch (state.randomNum)
        {
            case 0:
                return state.splitSentence.firstPart.toLowerCase() === value.toLowerCase();
            case 1:
                return state.splitSentence.secondPart.toLowerCase() === value.toLowerCase();
            case 2:
                return null;
            default:
                return null;
        }
    }

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

    renderSplitSentence(firstPart, secondPart) {
        return (
            <Row>
                <Col>
                    {firstPart}
                </Col>
                <Col>
                    {secondPart}
                </Col>
            </Row>
        );
    }

    renderBitsSentence(sentence) {
        return (
            <Row>
                <Col>
                    <SentenceBits sentence={sentence} />
                </Col>
            </Row>
        );
    }

    renderControls(state, sentence, handleChange) {
        const splitSentence = SplitSentence(sentence.text);
        var { firstPart, secondPart } = splitSentence;

        switch (state.randomNum) {
            case 0:
                return this.renderSplitSentence(
                            this.getTextControl(state, firstPart, handleChange),
                            this.getSpanControl(secondPart));
            case 1:
                return this.renderSplitSentence(
                            this.getSpanControl(firstPart),
                            this.getTextControl(state, secondPart, handleChange));
            case 2:
                return this.renderBitsSentence(sentence.text);
            default:
                return null;
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

        if (sentence) {
            return (
                <ListGroupItem>
                    <Container>
                        {this.renderControls(this.state, sentence, this.handleChange)}
                    </Container>
                </ListGroupItem>
            );
        }

        return null;
    }
};

export default Sentences;