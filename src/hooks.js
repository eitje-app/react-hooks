import React, {useEffect, useRef, useState} from 'react'

export function useAsyncEffect(effect, destroy, inputs) {
  var hasDestroy = typeof destroy === 'function';
  useEffect(function () {
    var result;
    var mounted = true;
    var maybePromise = effect(function () {
      return mounted;
    });

    Promise.resolve(maybePromise).then(function (value) {
      result = value;
    });

    return function () {
      mounted = false;

      if (hasDestroy) {
        destroy(result);
      }
    };
  }, hasDestroy ? inputs : destroy);
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export const useMergeState = (def = {}) => {
  const [state, setState] = useState(def)
  const setMergeState = newState => {
    setState(currState => ({...currState, ...newState}) )
  }
  return [state, setMergeState, setState]
}