import * as React from "react"
import * as header  from "../style/header.module.css"
import * as style from '../style/style.module.css'
import {Link} from "gatsby";

const Header = ({title}) => {
    return (
        <div className={header.header}>
            <div className={header.header_inner}>
                <div className={`${header.menu_icon} + ${header.header_inner_container}`}>
                    <div className={header.menu_icon_container}>
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
                        <span>make a booking</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header