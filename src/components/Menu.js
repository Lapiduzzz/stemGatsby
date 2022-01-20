import * as React from "react"
import Links from "./Links";
import * as style from "../style/style.module.css"
import * as menu from "../style/menu.module.css"
import {useRef} from "react";


const Menu = ({links}) => {

    const menuLinkRef = useRef(null)
    const menuArrRef = useRef(null)

    links.splice(4,1)
    const menuLinks = [
        {
            title: 'home',
            position: style.center,
            linkRef: menuLinkRef,
            arrRef: menuArrRef,
        },
        ...links
        ]

    return (
        <div className={menu.menu_container}>
            <div className={menu.menu}>
                {menuLinks.map(link => (
                    <div className={menu.link_container}>
                        <Links title={link.title}
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
