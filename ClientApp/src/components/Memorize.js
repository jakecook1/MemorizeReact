import React, { Component } from 'react';
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
            <div>
                <h1>Memorize</h1>
                {contents}
            </div>
        );
    }
}

export default Memorize;