import React from 'react';
import { SiteContext } from '../context/site.js';
import { ThemeContext } from '../context/theme.js';

 class Content extends React.Component {
     // I wanna use multiple contexts
     // in a class component 
     // I can not use static contextType
     // <ContextName.Consumer>
    render () {
        return (
            <div>
                <strong>Rendered from my Class Component</strong>
                <SiteContext.Consumer>
                    {
                        siteContext => (
                            <>
                                <h1>{siteContext.title}</h1>
                                <div>
                                   Content Class <a href={`http://www.twitter.com/${siteContext.twitter}`}>
                                    @{siteContext.twitter}
                                    </a>
                                </div>
                            </>

                        )
                    }
                </SiteContext.Consumer>
                
                <hr />

                <ThemeContext.Consumer>
                    {themeContext => (
                        <h2>Current Mode: {themeContext.mode}</h2>
                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }

 }

 export default Content;