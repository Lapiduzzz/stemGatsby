import React from "react"
import * as style from "../style/style.module.css"

const Video = ({ videoSrcURL, ...props }) => (
    <div className={style.video}>
        <video loop preload='auto' autoPlay muted>
            <source className={style.s}
                src={videoSrcURL}
                type="video/mp4"/>
        </video>
    </div>
)

export default Video