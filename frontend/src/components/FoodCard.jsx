import React from 'react';
import {Link} from 'react-router-dom';


const FoodCard = ({ food }) => {
    const { idMeal, strMeal, strCategory, strMealThumb } = food;
    return (
        <div className='card'>
        <img 
        src={strMealThumb}
        alt={strMeal}
        className='card-image'
        />
        <div className='card-body'>
        <span className='category'>{strCategory}</span>
        <h3>{idMeal}</h3>
        <Link className='Links' to={'https://www.themealdb.com/meal/' + idMeal} target='_blank'>Ingredients</Link>
        </div>
        </div>
    );
}



export default FoodCard;