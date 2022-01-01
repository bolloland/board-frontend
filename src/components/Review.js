import React from 'react'

const Review = (props) => {

    return (
        <div className="review-container">
           <strong> {props.rev.title}</strong> - {props.rev.rating} out of 5<br></br>
            {props.rev.rev_text}
        </div>
    )
}

export default Review
