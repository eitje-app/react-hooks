import React, { useState, useEffect, useRef } from 'react';


const useConcatState = (def) => {
  const [state, setState] = useState(def)
  const setConcatState = newEl => setState([...state, newEl])
  const delItem = item => setState(state.filter(i => i !== item))
  return [state, setConcatState, delItem, setState]
}

export default useConcatState;