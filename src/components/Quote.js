import React from 'react'


function QuoteSimpson ({props}) {
    return (
        <div className="QuoteSimpson">

            <img src={props.image} alt={props.character} />
            <p>{props.character}</p>
            <p>{props.quote}</p>
            
        </div>
    )
};

export default QuoteSimpson ;