import * as React from "react"
import Links from "./Links";
import * as menu from "../style/menu.module.css"
import {useEffect, useRef} from "react";
import {useMenuContext} from "../context/MenuContext";
import {useAnimationContext} from "../context/AnimationContext";


const Menu = () => {

    const menuRef = useRef(null)

    const {menuLinks} = useMenuContext()
    const {gsapTxt, gsapFade, arrMove} = useAnimationContext()

    useEffect(()=>{
        gsapTxt(menuLinks[0].linkRef.current, menuRef.current, 0,)
        gsapTxt(menuLinks[1].linkRef.current, menuRef.current, 0.1,)
        gsapTxt(menuLinks[2].linkRef.current, menuRef.current, 0.2,)
        gsapTxt(menuLinks[3].linkRef.current, menuRef.current, 0.3,)
        gsapTxt(menuLinks[4].linkRef.current, menuRef.current, 0.4,)
        gsapTxt(menuLinks[5].linkRef.current, menuRef.current, 0.5,)
        arrMove([
            menuLinks[0].arrRef.current,
            menuLinks[1].arrRef.current,
            menuLinks[2].arrRef.current,
            menuLinks[3].arrRef.current,
            menuLinks[4].arrRef.current,
            menuLinks[5].arrRef.current,
        ],menuRef.current )
    }, [])

    return (
        <div className={menu.menu_container} ref={menuRef}>
            <div className={menu.menu}>
                {menuLinks.map(link => (
                    <div className={menu.link_container}>
                        <Links title={link.title}
                               link={link.link}
                               fontSize={'5vw'}
                               arrowSize={'3vw'}
                               position={link.position}
                               linkRef={link.linkRef}
                               arrRef={link.arrRef}
                               />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Menu;
