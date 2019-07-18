import React, { Component } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    static displayName = Home.name;

    render() {

        return (
            <Container className="p-0" fluid>
                <Jumbotron className="shadow bg-dark" fluid>
                    <Container className="text-white">
                        <h1>Home</h1>
                        <p>Help you learn stuff!</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <ListGroup>
                        <ListGroupItem>
                            <Link to="/sentenceEdit">Add Sentence</Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link to="/memorize">Memorize</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </Container>
        );
    }
}

export default Home;