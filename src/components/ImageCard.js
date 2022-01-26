import * as React from "react"
import * as image from "../style/image_card.module.css"
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import imageCard1 from '/src/images/imageCard/ImageCard1.webp'
import imageCard2 from '/src/images/imageCard/ImageCard2.webp'
import imageCard3 from '/src/images/imageCard/ImageCard3.webp'
import imageCard4 from '/src/images/imageCard/ImageCard4.webp'
import imageCard5 from '/src/images/imageCard/ImageCard5.webp'
import imageCard6 from '/src/images/imageCard/ImageCard6.webp'



const ImageCard = ({whichCard, imageCardDisplay}) => {

    const imageFloatingRef = useRef()

    const imageRef1 = useRef(null)
    const imageRef2 = useRef(null)
    const imageRef3 = useRef(null)
    const imageRef4 = useRef(null)
    const imageRef5 = useRef(null)
    const imageRef6 = useRef(null)

    const cards = [
        {card: imageCard1, ref: imageRef1},
        {card: imageCard2, ref: imageRef2},
        {card: imageCard3, ref: imageRef3},
        {card: imageCard4, ref: imageRef4},
        {card: imageCard5, ref: imageRef5},
        {card: imageCard6, ref: imageRef6},
        ]

    const cardDisplay = (target) =>{
        gsap.set(imageRef1.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef2.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef3.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef4.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef5.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef6.current, { css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(target, { css: {opacity: 1, backgroundSize: "100% 100%"}})
    }

    useEffect(()=>{
        gsap.set('.image_card',{xPercent:-50,yPercent:-50})
        window.addEventListener("mousemove", (e)=>{
            gsap.to(imageFloatingRef.current,2,{x:e.clientX,y:e.clientY});
        })
    },[])

    useEffect(()=>{
        switch (whichCard){
            case 'APPROACH': cardDisplay(imageRef1.current)
                break
            case 'FOLIO': cardDisplay(imageRef2.current)
                break
            case 'FILMS': cardDisplay(imageRef3.current)
                break
            case 'ABOUT': cardDisplay(imageRef4.current)
                break
            case 'STORE': cardDisplay(imageRef5.current)
                break
            case 'CONTACTS': cardDisplay(imageRef6.current)
                break
            default: cardDisplay(imageRef1.current)
        }
    },[whichCard])

    return (
        <div className={image.image_card} ref={imageFloatingRef} style={imageCardDisplay ? {opacity: '1'} : {opacity: '0'}}>
            <div className={image.image_container} >
                {cards.map(el =>(<div className={image.image} ref={el.ref} style={{backgroundImage: `url(${el.card})`}}></div>))}
            </div>
        </div>
    )
}

export default ImageCard



/*
import * as React from "react"
import * as image from "../style/image_card.module.css"
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import simageCard1 from '/src/images/imageCard/ImageCard1.webp'
import simageCard2 from '/src/images/imageCard/ImageCard2.webp'
import simageCard3 from '/src/images/imageCard/ImageCard3.webp'
import simageCard4 from '/src/images/imageCard/ImageCard4.webp'
import simageCard5 from '/src/images/imageCard/ImageCard5.webp'
import simageCard6 from '/src/images/imageCard/ImageCard6.webp'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {useStaticQuery, graphql} from 'gatsby'


const ImageCard = ({whichCard, imageCardDisplay}) => {

    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: {path: {eq: "./src/markdown/home"}}) {
                frontmatter {
                    imageCard1 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                    imageCard2 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                    imageCard3 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                    imageCard4 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                    imageCard5 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                    imageCard6 {
                        childImageSharp {
                            gatsbyImageData(width: 350)
                        }
                    }
                }
            }
        }

    `)
    const images = data.mdx.frontmatter

    const imageCard1 = getImage(images.imageCard1)
    const imageCard2 = getImage(images.imageCard2)
    const imageCard3 = getImage(images.imageCard3)
    const imageCard4 = getImage(images.imageCard4)
    const imageCard5 = getImage(images.imageCard5)
    const imageCard6 = getImage(images.imageCard6)

    const imageFloatingRef = useRef()

    const imageRef1 = useRef(null)
    const imageRef2 = useRef(null)
    const imageRef3 = useRef(null)
    const imageRef4 = useRef(null)
    const imageRef5 = useRef(null)
    const imageRef6 = useRef(null)

    const cards = [
        {card: imageCard1, ref: imageRef1},
        {card: imageCard2, ref: imageRef2},
        {card: imageCard3, ref: imageRef3},
        {card: imageCard4, ref: imageRef4},
        {card: imageCard5, ref: imageRef5},
        {card: imageCard6, ref: imageRef6},
    ]

    const cardDisplay = (target) =>{
        alert(target)
        gsap.set(imageRef1.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(imageRef2.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(imageRef3.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(imageRef4.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(imageRef5.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(imageRef6.current, { css: {opacity: 0, css:{transform: 'scale(1)'}}})
        gsap.set(target, { css: {opacity: 1, css:{transform: 'scale(2)'}}})
    }

    useEffect(()=>{
        gsap.set('.image_card',{xPercent:-50,yPercent:-50})
        window.addEventListener("mousemove", (e)=>{
            gsap.to(imageFloatingRef.current,2,{x:e.clientX,y:e.clientY});
        })
    },[])

    useEffect(()=>{
        switch (whichCard){
            case 'APPROACH': cardDisplay(imageRef1.current)
                break
            case 'FOLIO': cardDisplay(imageRef2.current)
                break
            case 'FILMS': cardDisplay(imageRef3.current)
                break
            case 'ABOUT': cardDisplay(imageRef4.current)
                break
            case 'STORE': cardDisplay(imageRef5.current)
                break
            case 'CONTACTS': cardDisplay(imageRef6.current)
                break
            default: cardDisplay(imageRef1.current)
        }
    },[whichCard])

    return (
        <div className={image.image_card} ref={imageFloatingRef} style={imageCardDisplay ? {opacity: '1'} : {opacity: '0'}}>
            <div className={image.image_container} >
                {cards.map(el =>(<GatsbyImage className={image.image} alt={'image'} image={el.card} ref={el.ref} />))}
            </div>
        </div>
    )
}

export default ImageCard*/
