import React, {createContext, useContext, useRef, useState} from "react";
import * as style from "../style/style.module.css";

const MenuContext = createContext()

export const useMenuContext = () => (useContext(MenuContext))

export const MenuProvider = ({children}) => {

    const [menuDisplay, setMenuDisplay] = useState(false)

    const linkRef1 = useRef(null)
    const linkRef2 = useRef(null)
    const linkRef3 = useRef(null)
    const linkRef4 = useRef(null)
    const linkRef5 = useRef(null)
    const linkRef6 = useRef(null)
    const linkRef7 = useRef(null)

    const arrRef1 = useRef(null)
    const arrRef2 = useRef(null)
    const arrRef3 = useRef(null)
    const arrRef4 = useRef(null)
    const arrRef5 = useRef(null)
    const arrRef6 = useRef(null)
    const arrRef7 = useRef(null)

    const links = [
        {
            link: 'contact',
            title: 'home',
            position: style.center,
            linkRef: linkRef1,
            arrRef: arrRef1,
        },
        {
            link: 'approach',
            title: 'approach',
            position: style.start,
            linkRef: linkRef2,
            arrRef: arrRef2,
        },
        {
            link: 'folio',
            title: 'folio',
            position: style.start,
            linkRef: linkRef3,
            arrRef: arrRef3,
        },
        {
            link: 'films',
            title: 'films',
            position: style.end,
            linkRef: linkRef4,
            arrRef: arrRef4,
        },
        {
            link: 'about',
            title: 'about',
            position: style.start,
            linkRef: linkRef5,
            arrRef: arrRef5,
        },
        {
            link: 'store',
            title: 'store',
            position: style.center,
            linkRef: linkRef6,
            arrRef: arrRef6,
        },
        {
            link: 'contact',
            title: 'contact',
            position: style.center,
            linkRef: linkRef7,
            arrRef: arrRef7,
        },
    ]

    const menuLinks = [...links]
    menuLinks.splice(5, 1)
    const homeLinks = [...links]
    homeLinks.splice(0, 1)

    const contextValue = {menuDisplay, setMenuDisplay, menuLinks, homeLinks}

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    )
}
