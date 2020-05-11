import React from 'react';
import './home.scss'
import {ReactComponent as Logo} from '../../assist/back.svg'


const Home= ()=>{
        return(
            <div className="home">
                <Logo className="back_logo"/>
                <h3>Made By Rishabh Tyagi Using React</h3>
            </div>
        )
    }
export default Home;