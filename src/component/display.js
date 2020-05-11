import React from 'react';
import './display.scss';


const Display=({download_url})=>{
    return(
        <div className="display">
            <div className="img" style={{backgroundImage:`url(${download_url})`}}/>
        
        </div>

    )
}

export default Display;