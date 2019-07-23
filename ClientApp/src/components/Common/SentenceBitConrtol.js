import React, { Component } from 'react';
import FormValidator from '../../helpers/FormValidator';
import SentenceTextControl from './SentenceTextControl';

class SentenceBitControl extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.validator = new FormValidator([
            { field: 'word', method: this.matches, validWhen: true, message: 'Does not match.' }
        ]);

        this.state = {
            word: '',
            validateWord: this.props.word,
            validation: this.validator.valid()
        };
    }

    handleChange(e) {
        const validation = this.validator.validate({
            [e.target.name]: e.target.value || '',
            validateWord: this.state.validateWord
        });

        this.setState({
            [e.target.name]: e.target.value,
            validation: validation
        });
    }

    matches = (value, state) => {
        return state.validateWord.toLowerCase() === value.toLowerCase();
    }

    render() {
        const { word, validation } = this.state;

        return (
            <SentenceTextControl
                    part={this.state.validateWord}
                    type={"text"}
                    field={"word"}
                    value={word}
                    placeholder={"?"}
                    valid={validation.word.isInvalid}
                    message={validation.word.message}
                    onChange={this.handleChange}
                    style={{ width: 80 }} />
        );
    }
}

export default SentenceBitControl;