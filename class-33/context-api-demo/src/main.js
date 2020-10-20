import React from 'react';

import Site from './components/site.js';
import Theme from './components/theme.js';
import ContentClass from './components/content-class';
import ContentFunction from './components/content-function';
import {ThemeContext} from './context/theme';

class Main extends React.Component {

    static contextType = ThemeContext;

    render() {
        return (
            <main className={this.context.mode}>
                <section>
                    <ContentClass/>
                </section>
                <section>
                    <ContentFunction/>
                </section>
                <section>
                    <Site />
                </section>
                <section>
                    <Theme />
                </section>
            </main>
        )
    }
}

export default Main;

