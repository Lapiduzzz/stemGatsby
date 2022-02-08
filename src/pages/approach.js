import * as React from "react"
import 'normalize.css'
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";

const IndexPage = () => {

    return (
        <Layout title={'approach'}>
            <Introduction
                hStr1={'PUSH'}
                hStr2={'THE BOUNDS OF'}
                hStr3={'POSSIBILITY'}
                bottomText={'We thrive in the unknown, bringing ideas to life. Stem embodies the ethos that ‘no idea is impossible’, preferring to defy the limits of possibility than saying it can’t be done.'}

            />

            <Introduction bottomText={'From the products we use through to the disposal of the installations, we aim to leave the smallest environmental footprint possible, honouring people and planet.'}/>
            <Introduction/>
            <Introduction/>
            <Introduction/>

        </Layout>
    )
}

export default IndexPage
