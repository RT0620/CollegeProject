import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../crwn.svg';

const Header=()=>{
    return(
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="opt">
                <Link className="opti" to='/images'>Images</Link>
                <Link className="opti" to="quiz">QuizGame</Link>
                <Link className="opti" to='/gifs'>Gifs</Link>
    
            </div> 
        
        </div>

    )
}

export default Header;