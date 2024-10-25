import { Search } from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
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
                {/* Recipe 1 */}
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>
    </div>;
}

export default HomePage