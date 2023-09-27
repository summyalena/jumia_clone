'use client';

import {useEffect, useState} from 'react'

function useGetWindowSize() {
  const [windowWidth, setWindowWidth] = useState({width: undefined})

  useEffect(()=> {
      const handleSize = () => {
        setWindowWidth({width: window.innerWidth})
      }

    window.addEventListener('resize', handleSize);
    
    handleSize();

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  },[])

  return windowWidth;
}

export default useGetWindowSize;