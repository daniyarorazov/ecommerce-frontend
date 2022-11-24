import React from 'react';

const Rating = ({value, text, color}) => {

    let rating = []

    for (let i = 1; i <= 5; i++) {
        rating.push(<span>
                <i style={{color}} className={
                    value >= i
                        ? 'fa fa-star' : value >= (0.5 + (i - 1))

                            ? 'fas fa-star-half-alt' : 'far fa-star'


                }></i>
            </span>)
    }


    return (
        <div className="rating">

            {rating.map(el => el)}


            <span>{text && text}</span>
        </div>
    );
};

export default Rating;