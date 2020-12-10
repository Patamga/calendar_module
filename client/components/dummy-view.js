import React from 'react'
import Head from './head'
import BigCalendar from './BigCalendar'
import SmallCalendar from './SmallCalendar'
import CalendarList from './CalendarList'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      {/* <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10"> */}
      <div className="w-1/2">
        <SmallCalendar />
      </div>
      <div className="w-1/2">
        <CalendarList />
      </div>

      <div>
        <BigCalendar />
      </div>
      {/* </div>
      </div> */}
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
