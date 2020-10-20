import React, { useContext } from 'react';

import { SiteContext } from '../context/site';

function SiteEditor(props) {

    // in function components you can use useContext(context) 
    // you can use any number of contexts here using useContext
    
    const context = useContext(SiteContext);

    return (
        <>
          <h2>Site Settings</h2>
          <input 
            placeholder="Site Title"
            name="title"
            onChange={e=> context.setTitle(e.target.value)}
            />
           <input 
            placeholder="Twitter"
            name="twitter"
            onChange={e=> context.setTwitter(e.target.value)}
            />

        </>
    )
}

export default SiteEditor;