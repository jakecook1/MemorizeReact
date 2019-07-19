import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

class About extends Component {

    render() {

        return (
            <Container className="p-0" fluid>
                <Jumbotron className="shadow bg-dark" fluid>
                    <Container className="text-white">
                        <h1>About</h1>
                    </Container>
                </Jumbotron>
                <Container>
                    <p>Simple program to help you remember information.</p>
                </Container>
            </Container>
        );
    }
}

export default About;