const React = require("react")
const ContextProvider = require("./src/context/Context")

export const wrapRootElement = ({element}) => (<ContextProvider>{element}</ContextProvider>)
