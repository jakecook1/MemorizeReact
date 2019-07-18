import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import request from 'superagent';
import SentencesList from './Common/SentencesList';

class Memorize extends Component {
    constructor(props) {
        super(props);

        this.state = { sentences: [], loading: true };

        request.get('api/Sentences').then(res => {
            this.setState({ sentences: res.body, loading: false });
        }).catch(err => {
            this.setState({ errors: err });
        });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <SentencesList sentences={this.state.sentences} />;

        return (
            <Container className="p-0" fluid>
                <Jumbotron className="shadow bg-dark" fluid>
                    <Container className="text-white">
                        <h1>Memorize</h1>
                        <p>Fill in the stuff!</p>
                    </Container>
                </Jumbotron>
                <Container className="p-3">
                    {contents}
                </Container>
            </Container>
        );
    }
}

export default Memorize;