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

        const splitSentence = SplitSentence(this.props.sentence);

        this.state = {
            value: '',
            splitSentence: splitSentence,
            validation: this.validator.valid()
        };
    }

    matches = (value, state) => (state.splitSentence.secondPart === value)

    handleChange(event) {
        const validation = this.validator.validate({
            value: event.target.value || '',
            splitSentence: this.state.splitSentence
        });

        this.setState({
            value: event.target.value || '',
            validation: validation
        });
    }

    render() {
        const { sentence } = this.props;

        const splitSentence = SplitSentence(sentence);

        let validation = this.state.validation;

        if (sentence) {
            return (
                <ListGroupItem>
                    <Container>
                        <Row>
                            <Col>
                                <span>{splitSentence.firstPart}</span>
                            </Col>
                            <Col>
                                <SentenceTextControl
                                    type={"text"}
                                    field={"value"}
                                    value={this.state.value}
                                    placeholder={"Enter the rest..."}
                                    valid={validation.value.isInvalid}
                                    message={validation.value.message}
                                    onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>
            );
        }

        return null;
    }
};

export default Sentences;