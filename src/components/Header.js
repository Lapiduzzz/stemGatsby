import * as React from "react"
import * as header  from "../style/header.module.css"
import * as style from '../style/style.module.css'
import {Link} from "gatsby";
import {useMenuContext} from "../context/MenuContext";
import {useLocoScrollContext} from "../context/LocomotiveScrollContext";

const Header = ({title}) => {

    const {setMenuDisplay} = useMenuContext()
    const {ScrollInit} = useLocoScrollContext()

    const menuToggle = () => {
        setMenuDisplay(prev => !prev)
        setTimeout(()=> ScrollInit('update'), 0)
    }


    return (
        <div className={header.header}>
            <div className={header.header_inner}>
                <div className={`${header.menu_icon} + ${header.header_inner_container}`}>
                    <div className={header.menu_icon_container} onClick={()=> menuToggle()}>
                        <span className={`${header.line} + ${header.line_top}`}></span>
                        <span className={header.line}></span>
                        <span className={header.line}></span>
                    </div>
                </div>
                <div className={`${header.page_title} + ${header.header_inner_container}`}>
                    <span>{title}</span>
                </div>
                <div className={`${header.booking} + ${header.header_inner_container}`}>
                    <Link to={'/contacts'} className={style.link}>
                        {window.innerWidth < 768 ? <span>bkng</span> : <span>make a booking</span>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header