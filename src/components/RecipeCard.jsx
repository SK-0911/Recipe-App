import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
    <a href="#" className='relative h-32'>
        <img src="/1.jpg" alt="Recipe Img" 
            className='rounded-md w-full h-full object-cover cursor-pointer'
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-slate-700">
            <Soup size={16}/> 4 servings
        </div>

        <div>
            <div className="absolute top-1 right-2 bg-white-rounded-full p-1 cursor-pointer">
                <Heart size={20} className='hover:fill-red-500 hover:text-red-500'/>
            </div>
        </div>
    </a>

    <div className="flex mt-1">
        <div className="font-bold tracking-wide text-slate-700">Roasted Chicken</div>
    </div>
    <p className='my-2 text-slate-700'>Turkish Kitchen</p>

    <div className="flex gap-2 mt-auto">
        <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md text-slate-700'>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-bold'>Gluten-free</span>
        </div>
        <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md text-slate-700'>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-bold'>Heart-Healthy</span>
        </div>
    </div>
</div>
  )
}

export default RecipeCard