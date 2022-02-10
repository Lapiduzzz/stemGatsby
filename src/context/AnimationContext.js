import React, {createContext, useContext} from "react";
import {gsap} from "gsap";
import {useStateContext} from "./Context";

export const AnimationContext = createContext()

export const useAnimationContext = () => (useContext(AnimationContext))

export const AnimationProvider = ({children}) => {

    const {scrollContainerRef} = useStateContext()

    const gsapTxt = (target, trigger, delay, yPercent = 5,) => {
        gsap.fromTo(target, {
                duration: 1.5, ease: "power2.out", yPercent: 150, skewY: 5,
            },
            {duration: 1.5, ease: "power2.out", yPercent: yPercent, skewY: 0, delay: delay,
                scrollTrigger: {
                    trigger: trigger,
                    scroller: scrollContainerRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                }
            }
        )
    }
    const gsapFade = (target, trigger, delay, start) => {
        gsap.from(target, {
            duration: 1.25, opacity: 0, ease: "power2.out", delay: delay,
            scrollTrigger: {
                trigger: trigger,
                scroller: scrollContainerRef.current,
                start: start,
                end: 'bottom bottom',
            }
        })
    }
    const arrMove = (target, trigger) => {
        gsap.from(target, {duration: 1.25, ease: "power2.out", translateX: '-100%', delay: 1.25,
                scrollTrigger: {
                    trigger: trigger,
                    scroller: scrollContainerRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                }
            }
        )
    }

    return (
            <AnimationContext.Provider value={{gsapTxt, gsapFade, arrMove}}>
                {children}
            </AnimationContext.Provider>
    )
}
