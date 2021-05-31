import React, { useState, useEffect, useRef, useMemo } from 'react';


export default useComponentWillMount = (func) => {
    useMemo(func, [])
}