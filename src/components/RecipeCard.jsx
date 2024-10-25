import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const get2labels = (arr) => {
    return [arr[0], arr[1]];
}

const RecipeCard = ({recipe,bg,badge}) => {
    const healthLabels = get2labels(recipe.healthLabels);
    
  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
    <a href="#" className='relative h-32'>
        <img src={recipe.image} alt="Recipe Img" 
            className='rounded-md w-full h-full object-cover cursor-pointer'
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-slate-700">
            <Soup size={16}/> {recipe.yield} servings
        </div>

        <div>
            <div className="absolute top-1 right-2 bg-white-rounded-full p-1 cursor-pointer">
                <Heart size={20} className='hover:fill-red-500 hover:text-red-500'/>
            </div>
        </div>
    </a>

    <div className="flex mt-1">
        <div className="font-bold tracking-wide text-slate-700">{recipe.label}</div>
    </div>
    <p className='my-2 text-slate-700'>{recipe.cuisineType[0].charAt(0).toUpperCase(0) + recipe.cuisineType[0].slice(1)} Cuisine</p>

    <div className="flex gap-2 mt-auto">
        {
            healthLabels.map((label, idx) => (
                <div key={idx} className={`flex gap-1 ${badge}  items-center p-1 rounded-md text-slate-700`}>
                    <HeartPulse size={16} />
                    <span className='text-sm tracking-tighter font-bold'>{label}</span>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default RecipeCard