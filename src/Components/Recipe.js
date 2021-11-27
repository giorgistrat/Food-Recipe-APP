import React from 'react';
import './Recipe.css'

function Recipe(props) {
    return (
        <div className='recipe'>
            <h1 className='recipe-title'>{props.title}</h1>
            <ol className='recipe-list'>
                {props.ingredient.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className='recipe-para'>{props.calories}</p>
            <img className='recipe-img' src={props.image} alt="" />
        </div>
    )
}

export default Recipe;