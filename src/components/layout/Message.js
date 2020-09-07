import React from 'react'

const Message = (props) => {
    const { color, score, review } = props
    return (
        <div className="message">
            <div className=" container py-4">

                <h1>Result of mock </h1>
                <div className="result h2 my-4">
                    <span className="h2" style={{ color: `${color}` }}>{score}</span> / 400
             </div>
                <div className="review">
                    <h5>{review}</h5>
                </div>
            </div>
        </div>

    )
}
export default Message