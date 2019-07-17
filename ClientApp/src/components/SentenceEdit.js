import React, { Component } from 'react';
import { Container, Form, FormGroup } from 'reactstrap';
import request from 'superagent';
import ErrorsList from './Common/ErrorsList';
import SentenceTextAreaControl from './Common/SentenceTextAreaControl';
import ButtonControl from './Common/ButtonControl';

class SentenceEdit extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            value: 'Some day im gonna smack your face'
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();

        // Need to turn the text area string into an array of strings by "\n"
        let values = this.state.value.split('\n');
        let sentences = [];

        for (var i = 0; i < values.length; i++) {
           sentences.push({ text: values[i] });
        }

        request.post('api/Sentences').send(sentences).then(res => {
            this.props.history.push('/');
        }).catch(err => {
            this.setState({ errors: err.response.body });
        });
    }

    render() {
        const { value } = this.state;

        return (
            <Container>
                <h1>Sentence</h1>

                <ErrorsList errors={this.state.errors} />

                <Form>
                    <FormGroup>
                        <SentenceTextAreaControl
                            field={"sentence"}
                            value={value}
                            rows={12}
                            placeholder={"Add your sentence..."}
                            onChange={this.handleChange} />
                    </FormGroup>

                    <ButtonControl
                        type={"button"}
                        text={"Add"}
                        onClick={this.handleClick} />
                </Form>
            </Container>
        );
    }
}

export default SentenceEdit;