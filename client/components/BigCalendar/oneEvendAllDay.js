import React from 'react'

const oneEvendAllDay = (props) => {
  return (
    <div className="eventOne ">
      <div>&nbsp;&nbsp;{props.ev.summary}</div>
    </div>
  )
}

oneEvendAllDay.propTypes = {}

export default React.memo(oneEvendAllDay)
