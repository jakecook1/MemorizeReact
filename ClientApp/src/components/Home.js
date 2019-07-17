import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    static displayName = Home.name;

    render() {

        return (
            <div>
                <h1>Home</h1>
                <ListGroup>
                    <ListGroupItem>
                        <Link to="/sentenceEdit">Add Sentence</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/memorize">Memorize</Link>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Home;