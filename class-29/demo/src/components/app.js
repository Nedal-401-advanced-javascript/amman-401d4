import React from 'react'

import Header from './header';
import Main from './main';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';

//header, main, footer
const app = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    )
}

export default app
