import React, { useContext } from 'react';

import { SiteContext } from '../context/site';
import { ThemeContext } from '../context/theme';

function Content(props) {

    // in function components you can use useContext(context) 
    // you can use any number of contexts here using useContext
    
    const siteContext = useContext(SiteContext);
    const themeContext = useContext(ThemeContext);

    return (
        <>
          <strong>Rendered From Function Component</strong>
          <div>
               Content Function <a href={`http://www.twitter.com/${siteContext.twitter}`}>
                @{siteContext.twitter}
                </a>
            </div>
            <hr />
           <h2>Current Mode: {themeContext.mode}</h2>
        </>
    )
}

export default Content;