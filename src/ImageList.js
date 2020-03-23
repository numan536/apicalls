import React from 'react';


const ImageList = (props)=>{
   
    
    return props.data.length && props.data.map(item=>{
            return (
            <div>{item.description}</div>
            )
        })
        
    
}



export default ImageList