import React from 'react' ;
import './App.css'

const RenderDoc = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt='logo' className='image_'/>
            <p>see more <a href={props.source} target='_blank' rel="noopener noreferrer" className='link_'>Here</a></p>
        </div>
    )
}

export default RenderDoc ;