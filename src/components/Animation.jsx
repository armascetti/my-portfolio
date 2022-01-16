import React from 'react';
import Lottie from 'react-lottie-player'
import '../../src/App.css'

const Animation = (props) => {

    return (
        <div className='lottie-image'>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: "700px", height: "400px", margin: "0 auto" }}
            />
        </div>
    )
}

export default Animation

