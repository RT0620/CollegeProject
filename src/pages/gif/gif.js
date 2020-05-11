import React from 'react';
import './gif.scss';
import {Gif, Grid, Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('vOcCSqF2FClwWLG9UfsrJoHat1lmFbKe');


const Gifs= ()=>{
    const fetchGifs = (offset: number) =>
    gf.search("design", { offset, limit:10});
        return(
            <div className="gif">
                <Grid  
                fetchGifs={fetchGifs}
                width={1200}
                columns={6}
                gutter={8}
                />

            </div>
        )
    }
export default Gifs;