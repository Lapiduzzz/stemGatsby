import * as React from "react"
import * as count from "../style/page_counter.module.css";

const PageCounter = ({counter}) => {

    let xxx = []

    for (let i = 1; i <= counter; i++) {
        xxx = [...xxx, i]
    }

    return <div className={count.wrapper}>
        <div className={count.top}>
            <div className={count.inner}>
                {xxx.map(el => (<p>0{el}</p>))}
            </div>
        </div>
        <div className={count.bottom}>
            <p><span className={count.x}>/</span>  0{counter}</p>
        </div>
    </div>
}

export default PageCounter;