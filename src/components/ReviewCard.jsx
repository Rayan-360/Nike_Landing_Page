import React from 'react'
import {star} from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
            <img src={imgURL}  width={120} height={120} className='rounded-full object-cover'/>
        <p className='mt-6 text-slate-gray font-montserrat text-center max-w-sm text-lg'>{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl text-slate-gray leading-normal">({rating})</p>
        </div>
        <h2 className='font-palanquin mt-1 text-3xl font-bold text-center'>{customerName}</h2>

    </div>
  )
}

export default ReviewCard