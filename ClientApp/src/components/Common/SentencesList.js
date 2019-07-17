import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Sentences from './Sentences';

class SentencesList extends Component {

    static renderSentences(sentences) {
        if (sentences.length === 0) {
            return (
                <Container>
                    <ListGroup>
                        <ListGroupItem>
                            Please enter a sentence to memorize.
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            );
        };

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