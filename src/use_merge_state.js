import React, { useState, useEffect, useRef } from 'react';


const useMergeState = (def = {}) => {
  const [state, setState] = useState(def)
  const setMergeState = newState => setState({...state, ...newState})
  return [state, setMergeState, setState]
}

export default useMergeState;