import * as React from "react"
import * as image from "../style/image_card.module.css"
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useImageCard} from "../context/ImageCardContext";

import {graphql, useStaticQuery} from "gatsby";


const ImageCard = () => {

    const data = useStaticQuery(graphql`
        query{
            datoCmsImagecard {
                cards {
                    url(imgixParams: {h: "450", w: "350"})
                }
            }
        }
    `)

    const imageCards = data.datoCmsImagecard.cards



    const {whichCard, imageCardDisplay} = useImageCard().state

    const imageFloatingRef = useRef()

    const imageRef1 = useRef(null)
    const imageRef2 = useRef(null)
    const imageRef3 = useRef(null)
    const imageRef4 = useRef(null)
    const imageRef5 = useRef(null)
    const imageRef6 = useRef(null)

    const cards = [
        {card: imageCards[0].url, ref: imageRef1},
        {card: imageCards[1].url, ref: imageRef2},
        {card: imageCards[2].url, ref: imageRef3},
        {card: imageCards[3].url, ref: imageRef4},
        {card: imageCards[4].url, ref: imageRef5},
        {card: imageCards[5].url, ref: imageRef6},
    ]

    const cardDisplay = (target) => {
        gsap.set(imageRef1.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef2.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef3.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef4.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef5.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(imageRef6.current, {css: {opacity: 0, backgroundSize: "120% 120%"}})
        gsap.set(target, {css: {opacity: 1, backgroundSize: "100% 100%"}})
    }

    useEffect(() => {
        gsap.set('.image_card', {xPercent: -50, yPercent: -50})
        window.addEventListener("mousemove", (e) => {
            gsap.to(imageFloatingRef.current, 2, {x: e.clientX, y: e.clientY});
        })
    }, [])
    useEffect(() => {
        switch (whichCard) {
            case 'APPROACH':
                cardDisplay(imageRef1.current)
                break
            case 'FOLIO':
                cardDisplay(imageRef2.current)
                break
            case 'FILMS':
                cardDisplay(imageRef3.current)
                break
            case 'ABOUT':
                cardDisplay(imageRef4.current)
                break
            case 'STORE':
                cardDisplay(imageRef5.current)
                break
            case 'CONTACT':
                cardDisplay(imageRef6.current)
                break
            default:
                cardDisplay(imageRef1.current)
        }
    }, [whichCard])
    useEffect(() => {
        gsap.to(imageFloatingRef.current, {duration: 0.5, css: imageCardDisplay ? {opacity: '1'} : {opacity: '0'}})
    }, [imageCardDisplay])

    return (
        <div className={image.image_card} ref={imageFloatingRef}>
            <div className={image.image_container}>
                {cards.map(el => (
                    <div className={image.image} ref={el.ref} style={{backgroundImage: `url(${el.card})`}}></div>))}
            </div>
        </div>
    )
}

export default ImageCard

