import React, { useState, useEffect, useRef } from 'react';
import utils from '@eitje/utils'

const useToggleState = (def) => {
  const [state, setState] = useState(def)
  const setToggleState = newEl => setState([...utils.toggle(state, newEl)] )
  return [state, setToggleState, setState]
}

export default useToggleState;