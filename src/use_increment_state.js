import {useState} from 'react'

const useIncrementState = (def = 0) => {
  if(!_.isNumber(def)) throw new Error("incrementState needs a fucking number")
  const [state, setState] = useState(def)
  const incrementState = () => setState(state + 1)
  return [state, incrementState, setState]
}

export default useIncrementState

