import NavbarItem from './NavbarItem'
// import {Suspense} from 'react'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4'>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
      {/* </Suspense> */}
    </div>
  )
}