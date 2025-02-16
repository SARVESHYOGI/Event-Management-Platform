import React from 'react'
import UpcomingEvent from '../components/UpcomingEvent'
import PastEvent from '../components/PastEvent'

function Home() {
  return (

    <div className='flex flex-1 justify-center w-full bg-slate-600 h-screen'>
      <div className='flex flex-1 justify-center w-full bg-slate-100 h-screen overflow-y-auto'>
        <UpcomingEvent />
      </div>
      <div className='flex flex-1 justify-center w-full bg-slate-400 h-screen overflow-y-auto'>
        <PastEvent />
      </div>
    </div>
  )
}

export default Home