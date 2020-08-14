import React from 'react'

const Rainbow=(WrappedComponent)=>{
    const colours =['red','blue','green','yellow','pink','orange']; 
    const randomColur=colours[Math.floor(Math.random()*5)];
    const className=randomColur + '-text';

    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow
