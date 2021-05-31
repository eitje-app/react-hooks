import React, { useState, useEffect, useRef, useMemo } from 'react';


const useComponentWillMount = (func) => {
    useMemo(func, [])
}

export default useComponentWillMount