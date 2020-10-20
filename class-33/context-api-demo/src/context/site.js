import React, {useState} from 'react';


export const SiteContext = React.createContext();

function SiteProvider(props) {
    // as a state : title, twitter
    const [title, setTitle] = useState('Ahmad Shela');
    const [twitter, setTwitter] = useState('AhmedLouae');

    const state = {
        title, 
        twitter, 
        setTitle,
        setTwitter
    }

    return (
        <SiteContext.Provider value={state}>
            {props.children}
        </SiteContext.Provider>
    )
} 

export default SiteProvider;