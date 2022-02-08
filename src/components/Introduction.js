import * as React from "react"
import * as intro from "../style/introduction.module.css"
import * as style from "../style/style.module.css"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useEffect, useRef} from "react";
import {useAnimationContext} from "../context/AnimationContext";



const Introduction = ({backgroundImg, alt, bottomText, hStr1, hStr2, hStr3,}) => {

    const {gsapTxt, gsapFade} = useAnimationContext()

    const image = getImage(backgroundImg)

    const introRef = useRef()
    const hRef1 = useRef()
    const hRef2 = useRef()
    const hRef3 = useRef()
    const pRef = useRef()


    useEffect(()=>{
        gsapTxt(hRef1.current, introRef.current, 0)
        gsapTxt(hRef2.current, introRef.current, 0.2)
        gsapTxt(hRef3.current, introRef.current, 0.4)
        gsapFade(pRef.current, introRef.current, 0.2, 'bottom bottom')
    },[])

    return (
            <section className={intro.introduction} data-scroll ref={introRef}>
                <GatsbyImage className={intro.backgroundImg} alt={alt} image={image} data-scroll/>
                <div className={intro.header} data-scroll data-scroll-speed="1.5">
                    <div className={intro.h_container} >
                        <h1 className={style.h1} ref={hRef1}>{hStr1}</h1>
                    </div>
                    <div className={intro.h_container}>
                        <h1 className={style.h1} ref={hRef2}>{hStr2} </h1>
                    </div>
                    <div className={intro.h_container}>
                        <h1 className={style.h1} ref={hRef3}>{hStr3}</h1>
                    </div>
                </div>
                <div className={intro.text} data-scroll>
                    <p ref={pRef}>{bottomText}</p>
                </div>
            </section>
    )
}



export default Introduction
