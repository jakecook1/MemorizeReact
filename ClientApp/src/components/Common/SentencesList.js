import React, { Component } from 'react';
import { Container, ListGroup } from 'reactstrap';
import Sentences from './Sentences';

class SentencesList extends Component {

    static renderSentences(sentences) {
        return (
           <Container>
               <ListGroup>
                    {sentences.map((sentence, index) =>
                        <Sentences
                            key={`${sentence}${index}`}
                            index={index}
                            sentence={sentence} />
                    )}
                </ListGroup>
           </Container> 
        );
    }

    render() {
        const { sentences } = this.props;
        return (
            SentencesList.renderSentences(sentences)
        );
    }
}

export default SentencesList;