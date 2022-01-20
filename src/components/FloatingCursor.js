import * as React from "react"
import * as style from "../style/style.module.css";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const FloatingCursor = ({cursorData, isSectionHover, cursorArrowsDisplay, swiperHover}) =>{

    const cursorRef = useRef(null)
    const cursorArrowsRef = useRef(null)
    const rightArrRef = useRef(null)
    const leftArrRef = useRef(null)
    const circleRef = useRef(null)
    const cursorDataRef = useRef(null)

    const leftArrowAnimate = (which, trigger, oneParam, secondParam) => {
         which
            ? gsap.to(trigger,{ duration: 1, css: {left: oneParam}})
            : gsap.to(trigger,{ duration: 1, css: {left: secondParam}})
    }
    const rightArrowAnimate = (which, trigger, oneParam, secondParam) => {
        which
            ? gsap.to(trigger,{ duration: 1, css: {right: oneParam}})
            : gsap.to(trigger,{ duration: 1, css: {right: secondParam}})
    }

    useEffect(()=>{

        gsap.to(circleRef.current, {
            duration: 2,
            css: isSectionHover === true &&
                {
                    strokeDasharray: '1000 0',
                    strokeDashoffset: '1000',
                }
        })
        gsap.to(circleRef.current, {
            duration: 1,
            css: isSectionHover === false &&
                 {
                    strokeDasharray: '0 1000',
                    strokeDashoffset: '1000',
                }
        })
        gsap.to(cursorDataRef.current, {duration: 0.5, css: isSectionHover ? {opacity: '1'} : {opacity: '0'}})

    },[isSectionHover])
    useEffect(()=>{

        leftArrowAnimate(cursorArrowsDisplay, rightArrRef.current, 25,  35)
        rightArrowAnimate(cursorArrowsDisplay, leftArrRef.current, 20,  30)
        gsap.to(cursorArrowsRef.current, {duration: 0.5, css: cursorArrowsDisplay ? {opacity: 1} : {opacity: 0}})

    },[cursorArrowsDisplay])
    useEffect(()=>{

        leftArrowAnimate(swiperHover, rightArrRef.current, 5,  25)
        rightArrowAnimate(swiperHover, leftArrRef.current, 0,  20)
        gsap.to(circleRef.current,{ duration: 0.5, css: swiperHover ? {r: 30} : {r: 65}})

    },[swiperHover])
    useEffect(()=>{
        gsap.set('.floating_cursor',{xPercent:-50,yPercent:-50})
        window.addEventListener("mousemove", (e)=>{
            gsap.to(cursorRef.current,.75,{x:e.clientX,y:e.clientY});
        })
    },[])

    return (
        <div className={style.floating_cursor} ref={cursorRef}>
            <svg width="135" height="135" x="0px" y="0px" viewBox="0 0 135 135" fill="none">
                <circle cx="65" cy="65" r="65" stroke="#FFFFE7" ref={circleRef}/>
            </svg>
            <div className={style.cursor_arrows} ref={cursorArrowsRef} >
                <div className={style.cursor_left} ref={rightArrRef}/>
                <div className={style.cursor_right} ref={leftArrRef}/>
            </div>
            <p className={style.cursor_data} ref={cursorDataRef}>{cursorData}</p>
        </div>
    )
}

export default FloatingCursor;