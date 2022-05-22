import React, { useState } from 'react'

function Rating({ratingValue}) {

  const [stars,setStars]=useState([])
  const [rating,setRating]=useState(0)
  const [hover,setHover]=useState(0)

 const  changeRating=(newRating)=> {
    setRating(newRating);

    if (props.onChange)
        props.onChange(newRating);
}

const hoverRating=(rating) =>{
    setHover(rating);
}
  return (
    <div className="star-rating flex gap-1 text-orange-400">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star  text-lg">&#9733;</span>
          </button>
        );
      })}
    </div>
);
}

export default Rating
