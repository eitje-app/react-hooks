import {useState, useEffect} from 'react'
import moment from 'moment'
import {useInterval} from 'index'

const useCountup = ({defaultValue = 0, defaultTime} = {}) => {
  let def = defaultValue

  if (defaultTime) {
    def = moment().diff(moment(defaultTime), 's')
  }

  const [secondsElapsed, setSeconds] = useState(def)

  useInterval(() => {
    setSeconds((secs) => secs + 1)
  }, 1000)

  useEffect(() => {
    if (defaultTime) {
      setSeconds(moment().diff(moment(defaultTime), 's'))
    }
  }, [defaultTime])

  return secondsElapsed
}

export default useCountup
