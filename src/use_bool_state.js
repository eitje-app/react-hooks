import {useState} from 'react'

const useBoolState = (def) => {
  const [state, setState] = useState(def)
  const setToggleState = () => setState(!state)
  return [state, setToggleState, setState]
}

export default useBoolState
