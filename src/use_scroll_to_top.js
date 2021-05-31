import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';


const useScrollToTop = (scrollView, toWatch = []) => {
  useLayoutEffect(() => {
  	scrollView && scrollView.current && scrollView.current.scrollTo({y: 0, x: 0, animated: true})
  }, toWatch)
}

export default useScrollToTop;