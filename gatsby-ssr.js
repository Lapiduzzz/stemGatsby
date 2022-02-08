import React from "react"
import {ContextProvider} from "./src/context/Context";

export const wrapRootElement = ({element}) => (<ContextProvider>{element}</ContextProvider>)

