import React, { Component } from 'react';
import { Container, Form, FormGroup } from 'reactstrap';
import SentenceTextAreaControl from './Common/SentenceTextAreaControl';
import ButtonControl from './Common/ButtonControl';

class SentenceEdit extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        alert(e.target.value);
    }

    handleClick(e) {
        e.preventDefault();
        alert("Clicked")
    }

    render() {

        return (
            <Container>
                <h1>Sentence</h1>

                <Form>
                    <FormGroup>
                        <SentenceTextAreaControl
                            field={"sentence"}
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