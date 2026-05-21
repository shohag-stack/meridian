import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedHeading({title, className}: {title: string, className: string}) {

  const ref = useRef<HTMLDivElement>(null)
  const words = title.split(" ")


  useEffect(()=> {

    const el = ref.current
    if(!el) return;
    const wordsEl = el.querySelectorAll<HTMLDivElement>('.word')

    const ctx = gsap.context(()=>{

      gsap.set(wordsEl, { yPercent: 110, opacity: 0})

      gsap.to(wordsEl, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });



    }, el)

    return ()=> ctx.revert()


  }, [title])

  return (
    <div ref={ref} className={`${className} flex flex-wrap gap-0.5`} aria-label={title}>
        {
          words.map((w, i)=> (
            <span key={i} className="inline-block overflow-hidden"> 
              <span className='word inline-block will-change-transform'>
                {w}
              </span>
            </span>
          ))
        }
    </div>
  )
}