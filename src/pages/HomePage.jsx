import { Search } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from "../lib/utils";

const APP_ID = "7b15303f";
const APP_KEY = "393436a82a9b86438048f0f73b380d6d";
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState([]);

    const fetchRecipes = async (search) => {
        setLoading(true);
        setRecipes([]);
        try{
            const res = await fetch(
                `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}&type=public`
            )
            const data = await res.json();
            setRecipes(data.hits);


        } catch (error) {
            console.log(error.message);
        } finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchRecipes("Paneer");
    }, [])
  return <div className='bg-[#222] p-10 flex-1'>
        <div className="max-w-screen-lg mx-auto">
            <form action="">
                <label className="input shadow-md flex items-center gap-2 bg-white">
                    <Search size={24} color='#222'/>
                    <input type="text" 
                    className='text-sm md:text-md grow placeholder-gray-600 focus:placeholder-gray-300'
                    placeholder='What do you want to cook today?'
                    />
                </label>
            </form>
            <h1 className='text-white font-bold text-3xl md:text-5xl mt-4'>
                Recommended Recipes
            </h1>
            <p className='text-slate-200 font-semibold ml-1 my-3 text-sm tracking-tight'>
                Popular Choices
            </p>

            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {!loading && 
                    recipes.map(({recipe}, index) => (
                        <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
                    )
                )}
                {loading &&
                        [...Array(9)].map((_, index) => (
                            <div key={index} className='flex flex-col gap-4 w-full'>
                                <div className='skeleton h-32 w-full'></div>
                                <div className='flex justify-between'>
                                    <div className='skeleton h-4 w-28'></div>
                                    <div className='skeleton h-4 w-24'></div>
                                </div>
                                <div className='skeleton h-4 w-1/2'></div>
                            </div>
                        ))}
            </div>
        </div>
    </div>;
}

export default HomePage