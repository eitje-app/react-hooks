import React, { useState, useEffect, useRef } from "react";

const useConcatState = (def = []) => {
  const [state, setState] = useState(def);
  const setConcatState = (newEl) => setState([...state, newEl]);
  const delItem = (item, identifier) =>
    setState(
      state.filter((i) => (identifier ? i[identifier] !== item : i !== item))
    );
  return [state, setConcatState, delItem, setState];
};

export default useConcatState;
