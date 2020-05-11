import React, { Component } from 'react';
import './Image.scss'
import Display from '../../component/display'


class Image extends Component {
    state={
        images:[]
    }

    componentDidMount(){
        fetch(`https://picsum.photos/v2/list?page=2&limit=20`).then(
            response => response.json()
        ).then(data=> this.setState({images:data})
        )

    }
    render(){
        return(
            <div className="images" >
                {
                    this.state.images.map(({id,...otherprops}) => <Display key={id} {...otherprops}/>)

                }
        
            </div>
        )
    }
}
export default Image