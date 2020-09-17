 import React, { useState } from 'react';
import images from './Imagescontent'
import Home from './Home'




const ImageHead = (props) => {
const [index, setIndex] = useState([0]);

  const Next = () => {
    setIndex(index[0] + 1)
  }

  const Prev = () => {
    console.log(Prev);
  }

    return (
      <div className="slideshow-container">
        <div className="mySlides2">
            <img  className="imagehead" src={props.img}  alt="" />
            {props.index}
          </div>
          <a className="prev" onClick={Prev}>&#10094;</a>
          <a className="next" onClick={Next}>&#10095;</a>
        </div>
    )
}
export default ImageHead
