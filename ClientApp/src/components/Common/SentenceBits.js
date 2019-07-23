import React, { Component } from 'react';
import SentenceBitConrtol from './SentenceBitConrtol';

class SentenceBits extends Component {
    renderBits(sentence) {
        let words = sentence.split(' ');

        return (
            words.map(function(word, i) {
                if (i % 5 !== 0) {
                    return (
                        <span key={`word${i}`}>{word}&nbsp;</span>
                    );
                } else {
                    return (
                        <SentenceBitConrtol key={`word${i}`} word={word} />
                    );
                }
            })
        );
    }

    render() {
        const { sentence } = this.props;

        return (
            <div className="form-inline">
                {this.renderBits(sentence)}
            </div>
        );
    }
}

export default SentenceBits;