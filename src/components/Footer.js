import * as React from "react"
import * as s  from "../style/header.module.css"
import * as ss  from "../style/footer.module.css"


const Footer = () => {
    return (
        <div className={ss.footer} data-scroll-section>
            <div className={s.header_inner}>
                <div className={s.menu_icon}>
                    x
                </div>
                <div className={s.booking}>
                    <p>make a booking</p>
                </div>
            </div>
        </div>
    )
}

export default Footer