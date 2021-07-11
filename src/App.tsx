import React from 'react';
import Layout from './layout';
import './assets/css/index.scss';
import { MarkdownProvider } from './context/MarkdownContext';

const App: () => JSX.Element = () => {
    return (
        <MarkdownProvider>
            <Layout/>
        </MarkdownProvider>
    );
}

export default App;
