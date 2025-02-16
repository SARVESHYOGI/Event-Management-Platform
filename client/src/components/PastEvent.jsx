import React from 'react'
import Card from './Card'

function PastEvent() {
  return (
    <>
      <div>

        <div>UpcomingEvent</div>
        <div>
          <div className='w-full bg-slate-200 m-2'>
            <Card />
          </div>
          <div className='w-full  bg-slate-200 m-2'>
            <Card />

          </div>
          <div className='w-full bg-slate-200 m-2'>
            <Card />

          </div>
        </div>
      </div>
    </>
  )
}

export default PastEvent