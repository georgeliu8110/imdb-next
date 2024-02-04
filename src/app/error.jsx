'use client'

import {useEffect} from 'react'

export default function Error({error, reset}){
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong, please try later</h1>
      <button className='hover:text-amber-500' onClick={()=>reset()}>Try again</button>
    </div>
  )
}