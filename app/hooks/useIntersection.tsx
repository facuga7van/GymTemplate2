import React, { useState, useRef, useEffect } from "react";

type UseIntersectionProps = {
    root?: Element;
    rootMargin?: string;
    treshold?: number | void;
    cb?: (arg0: any) => void;
  }
   const useIntersection = (props: UseIntersectionProps = {}) => {
    const { root, rootMargin = "-5%",treshold = 0, cb}  = props;
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  
    useEffect(() => {
      const {current} = ref;
      if (!current) return;
  
      const handleIntersection: IntersectionObserverCallback = ([entry]) =>{
        setIsIntersecting(entry.isIntersecting);
        if(cb) cb(entry.isIntersecting);
      };
  
      const options = {
        root,
        rootMargin,
        treshold
      }
      const observer = new IntersectionObserver(handleIntersection,options);
      observer.observe(current);
      return () => current && observer.unobserve(current);
    }, [ref,root,rootMargin,treshold,cb]);
  
    return [isIntersecting, ref]
  };
  export default useIntersection;