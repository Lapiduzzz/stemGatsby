import * as React from "react"
import * as links from "../style/links.module.css";
import {Link} from "gatsby";
import * as style from "../style/style.module.css";
import {useEffect, useState} from "react";
import {gsap} from "gsap";


const Links = ({title, fontSize, position, setWhichCard, arrowSize, linkRef, arrRef,}) =>{

    const [headerLinkHover, setHeaderLinkHover] = useState(false)
    const [arrowLoaded, setArrowLoaded] = useState(false)

    const linkOver = (e) =>{
        if (headerLinkHover === false ){
            setHeaderLinkHover(true)
            setWhichCard( e.target.outerText)
        }
        if(arrowLoaded !== true){
            setArrowLoaded(true)
        }
    }
    const linkLeave = (e) =>{
        if (headerLinkHover === true){
            setHeaderLinkHover(false)
        }
    }

    useEffect(()=>{
        if(arrowLoaded) {
            gsap.to(arrRef.current, {
                duration: 1.25, css:
                    headerLinkHover
                        ? {transform: 'translate(10%)',}
                        : {transform: 'translate(0%)',}

            })
        }
    },[headerLinkHover])

    return(
        <Link to={`/${title}`}>
            <div className={links.links_container } data-scroll
                 onMouseEnter={e => linkOver(e)}
                 onMouseLeave={e => linkLeave(e)}>
                    <div className={`${links.link} + ${position}`}>
                        <h1 className={style.h1} style={{fontSize: `${fontSize}`}} ref={linkRef} >{title}</h1>
                        <div className={links.arrow_container}>
                            <svg viewBox="0 0 200 100"
                                 fill="none"
                                 ref={arrRef}
                                 className={links.arrow}
                                 style={{ height: `${arrowSize}`}}>
                                <path d="M167.641 54.5L0.000359535 54.5" stroke="#D9C8A9" stroke-miterlimit="10"/>
                                <path d="M113.565 109C113.565 79.0915 137.965 54.5 167.641 54.5" stroke="#D9C8A9" stroke-width="5" stroke-miterlimit="10"/>
                                <path d="M167.641 54.5C137.965 54.5 113.565 29.9085 113.565 -1.47803e-06" stroke="#D9C8A9" stroke-width="5" stroke-miterlimit="10"/>
                            </svg>
                        </div>
                    </div>
            </div>
        </Link>
    )
}

export default Links;