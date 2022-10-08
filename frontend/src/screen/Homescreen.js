import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidescreen from './Slidescreen';
import images from "../images";
import Cardscreen from './Cardscreen';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="


function Homescreen() {
const[isLoading,setIsLoading]= useState(false);
const[query, setQuery]= useState("");
const[foods,setFoods]= useState([]);

const searchFood = async () =>{
  setIsLoading(true);
  const url = apiUrl + query;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  setFoods(data.meals);
  setIsLoading(false);
};

useEffect(() => {
  searchFood()
},[]);

const handleSubmit = event =>{
  event.preventDefault()
  searchFood()
}
// function to search for food
  return (
    <div className='body'>
      <header>
       <Link to='/'><div className='Brandhero'><span className='Brand'>LUCKYFOOD </span>RESTAURANT</div>
       </Link>
       <div>
        <Link  className='Icon'><ShoppingCartIcon  /></Link>
        <Link  className='Icon'><FavoriteIcon  /></Link>
       </div>
       <div>
       <Link className='Link'>Home</Link>
       <Link className='Link'>Admin</Link>
       <Link className='Link'>Sign in</Link>
       </div>
       
      </header>
      <main>
       <div className='search'>
       <div className='searchBar'>
       <SearchBar 
       handleSubmit={handleSubmit}
       value={query}
       onChange ={event => setQuery(event.target.value)}  
       isLoading={isLoading}
       />
       </div>
       
       </div>
       <div>
        <Slidescreen images={images}/>
       </div>
       <div className='text'>
       <h1 className='Title'>WHY YOU <span className="Orange">CHOICE</span> US?</h1>
       <h2 className='Subtit'>No. 1 Restaurant in the town. We serve world's best food.</h2>
       </div>
        <hr className='hr' />
        <div> <Cardscreen /> </div>
        <div className='container'>
        <div className='foods'>
        {foods ? foods.map(food => (
         <FoodCard 
          key={food.idMeal}
          food={food}
         />
        )): "No Food!"}
        </div>
        </div>
        
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Homescreen
