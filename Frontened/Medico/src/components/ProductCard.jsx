import React from 'react'

export const ProductCard = () => {
  return (
    <div>
        <div className='shadow-2xl opacity-100 w-[357px] h-[444px] mx-auto rounded-xl mt-8'>
            <div className='mx-auto bg-black w-[321px] h-[225px]'>
                Image
            </div>
            <div className='flex flex-row'>
                <div className='ml-6 mt-2'>
                    <p className='font-light text-'>Nutrition</p>
                    <p className='font-semibold text-xl'>Paracetamol</p>
                </div>
                <div className='mx-[8rem] mt-3'>
                    <p className='font-bold text-2xl'>Rs.100</p>
                </div>
            </div>
            <div className='ml-6 mt-3'>
                <p>CHETTINAD MEDICALS</p>
                <p>100mg tab</p>
            </div>
        </div>
    </div>
  )
}
