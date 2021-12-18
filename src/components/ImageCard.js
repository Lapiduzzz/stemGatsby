import * as React from "react"
import * as image from "../style/image_card.module.css"
import {StaticImage} from "gatsby-plugin-image";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const ImageCard = ({headerLinkHover}) => {


    const imageFloatingRef = useRef()
    useEffect(()=>{
        gsap.set('.ccc',{xPercent:-50,yPercent:-50})
        window.addEventListener("mousemove", (e)=>{
            gsap.to(imageFloatingRef.current,1.5,{x:e.clientX,y:e.clientY});
        })
    },[])
    return (
        <div className={image.image_card} ref={imageFloatingRef}>
            <div className={image.image_container}>
                <StaticImage src={'../images/imageCard/imageCard1.jpg'} alt={'img'}
                             className={headerLinkHover ? `${image.image} + ${image.hover}` : image.image} />
                <StaticImage src={'../images/imageCard/imageCard2.jpg'} alt={'img'}
                             className={headerLinkHover ? `${image.image} + ${image.hover}` : image.image}
                />
                <StaticImage src={'../images/imageCard/imageCard3.jpg'} alt={'img'} className={image.image} />
                <StaticImage src={'../images/imageCard/imageCard4.jpg'} alt={'img'} className={image.image} />
                <StaticImage src={'../images/imageCard/imageCard5.jpg'} alt={'img'} className={image.image} />
                <StaticImage src={'../images/imageCard/imageCard6.jpg'} alt={'img'} className={image.image} />
            </div>
        </div>
    )
}

export default ImageCard