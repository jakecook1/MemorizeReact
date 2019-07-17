import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Common/Layout';
import Home from './components/Home';
import About from './components/About';
import Memorize from './components/Memorize';
import SentenceEdit from './components/SentenceEdit';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/memorize' component={Memorize} />
                <Route path='/sentenceEdit' component={SentenceEdit} />
                <Route path='/about' component={About} />
            </Layout>
        );
    }
}
