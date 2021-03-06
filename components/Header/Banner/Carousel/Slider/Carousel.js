import { useState } from 'react'
import {_images, imageData, typewriter } from './ImageComponent'
import Typical from 'react-typical'

export const Carousel = () => {

    const { img, title } = imageData
    const [x, setX] = useState(0)

    const goLeft = () => {
        setX( x + 100)
        x === 0 ? setX(-100 * (imageData.length-1)) : setX( x + 100)
    }

    const goRight = () => {
        setX ( x - 100)
        x === -100 * (imageData.length-1)? setX(0) : setX(x - 100)
    }

    return ( 
        <div className="carousel-container">
           <div className="carousel-slider">
               {imageData.map((image, index) => {
                   return (
                       <div key={index} className="carousel-slide"
                       style={{ transform: `translateX(${x}%)`}}
                       >
                           <img src={image.img} alt={image.title} className='carousel-image' />
                           <div className="carousel-center">
                               <div className="center-title">
                                {image.title}
                                <Typical
                                    steps={image.typing}
                                    loop={Infinity}
                                    wrapper='h1'
                                />
                               </div>

                            </div>
                       </div>
                   )
               })}
            <button id='goLeft' onClick={goLeft}>Left</button>

            <button id='goRight' onClick={goRight}>Right</button>

           </div>

        </div>
    )
}