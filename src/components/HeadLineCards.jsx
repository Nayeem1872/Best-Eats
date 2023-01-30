import React from 'react'
import card from "../img/veggie-pad-thai.jpg"
import card1 from "../img/thai-inspired-vegetable-broth.jpg"
import card2 from "../img/veggie-pad-thai.jpg"

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>

                <p className='font-bold text-2xl px-2 pt-4'>React is easy?</p>
                <p className='px-2'>Let's Find it out</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-5'>Order Now</button>


            </div>
            <img className='max-h-[160px] md:mac-h-[200px] w-full object-cover rounded-xl' src={card}></img>



        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>

                <p className='font-bold text-2xl px-2 pt-4'>Next Js is something</p>
                <p className='px-2'>Let's Find it out</p>
                <button className='border-white bg-white mx-2 text-black absolute bottom-5'>Order Now</button>


            </div>
            <img className='max-h-[160px] md:mac-h-[200px] w-full object-cover rounded-xl' src={card1}></img>



        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>

                <p className='font-bold text-2xl px-2 pt-4'>Tailwind Css Complicated?</p>
                <p className='px-2'>Let's Find it out</p>
                <button className='border-white bg-white mx-2 text-black absolute bottom-5'>Order Now</button>


            </div>
            <img className='max-h-[160px] md:mac-h-[200px] w-full object-cover rounded-xl' src={card2}></img>



        </div>
        





    </div>
    
  )
}

export default HeadLineCards