import React, { Component } from 'react';
import SentencesList from './Common/SentencesList';

class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = { sentences: [], loading: true };
        
        fetch('api/Home/Sentences')
            .then(response => response.json())
            .then(data => {
                this.setState({ sentences: data, loading: false });
        });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <SentencesList sentences={this.state.sentences} />;

        return (
            <div>
                <h1>Home</h1>
                {contents}
            </div>
        );
    }
}

export default Home;