import {useState} from 'react'
import moment from 'moment'
import {useCountup} from './index'

const useCountdown = (totalSeconds) => {
  const secondsElapsed = useCountup()
  return totalSeconds - secondsElapsed
}

export default useCountdown
