import * as React from "react"
import * as s from "../style/header.module.css"
import * as footer from "../style/footer.module.css"
import Spacer from "./Spacer";
import {Link} from "gatsby";
import * as style from "../style/style.module.css";
import {useEffect, useRef} from "react";
import {useAnimationContext} from "../context/AnimationContext";
import {useLocoScrollContext} from "../context/LocomotiveScrollContext";
import {useMenuContext} from "../context/MenuContext";

const Footer = () => {

    const {gsapFade} = useAnimationContext()
    const {scrollTop} = useLocoScrollContext()
    const {menuDisplay} = useMenuContext()


    const footerRef = useRef(null)
    const arrowRef = useRef(null)
    const contactRef1 = useRef(null)
    const contactRef2 = useRef(null)
    const socialRef = useRef(null)
    const bottomRef = useRef(null)


    useEffect(()=>{
        setTimeout(()=> {
            gsapFade(arrowRef.current, footerRef.current, 0, 'top center')
            gsapFade(contactRef1.current, footerRef.current, 0.2, 'top center')
            gsapFade(contactRef2.current, footerRef.current, 0.4, 'top center')
            gsapFade(socialRef.current, footerRef.current, 0, 'bottom bottom')
            gsapFade(bottomRef.current, footerRef.current, 0.6, 'bottom bottom')
        },0)
    },[])

    return (
        <section className={footer.footer} data-scroll-section ref={footerRef}
                 style={menuDisplay ? {display: "none"} : {display: "block"}}>
            <div className={footer.arrow_wrapper}>
                <div className={footer.arrow} ref={arrowRef} onClick={() => scrollTop()}>
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8H18" stroke="#FFFFE7" stroke-miterlimit="10"/>
                        <path d="M7.97838 0C7.97838 4.39024 4.37838 8 0 8" stroke="#FFFFE7" stroke-miterlimit="10"/>
                        <path d="M0 8C4.37838 8 7.97838 11.6098 7.97838 16" stroke="#FFFFE7" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
            <Spacer/>
            <div className={footer.contact_wrapper}>
                <p ref={contactRef1}><span>A/ </span>168a Barry Parade, <br/> Fortitude Valley QLD 4006</p>
                <p ref={contactRef2}><span>E/ </span>info@stemdesign.net <br/> <span>P/</span> (+61) 404 634 205</p>
            </div>
            <Spacer/>
            <div className={footer.social_wrapper}>
                <div className={footer.social} ref={socialRef}>
                    <p>
                        <Link to={'https://www.instagram.com/stemdesignflorals/'} className={style.link}>
                            <span>Instagram</span>
                        </Link>
                    </p>
                    <p>
                        <Link to={'https://vimeo.com/'} className={style.link}>
                            <span>Vimeo</span>
                        </Link>
                    </p>
                    <p>
                        <Link to={'https://www.facebook.com/stemdesignweddings'} className={style.link}>
                            <span>Facebook</span>
                        </Link>
                    </p>
                </div>
            </div>
            {window.innerWidth < 768
            ? <div className={footer.bottom} ref={bottomRef}>
                    <div className={footer.bottom_center}>
                        <p>Stem design <span>by</span> nicole cooper</p>
                    </div>
                </div>
            : <div className={footer.bottom} ref={bottomRef}>
                    <p>©stemdesign 2022</p>
                    <div className={footer.bottom_center}>
                        <p>Stem design <span>by</span> nicole cooper</p>
                    </div>
                    <p>Website by</p>
                </div>
            }

        </section>
    )
}

export default Footer