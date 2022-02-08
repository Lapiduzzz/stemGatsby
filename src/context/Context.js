import React, {createContext, useContext, useRef} from "react";
import {AnimationProvider} from "./AnimationContext";
import {ImageCardProvider} from "./ImageCardContext";
import {FloatingCursorProvider} from "./FloatingCursorContext";
import {MenuProvider} from "./MenuContext";
import {LocoScrollProvider} from "./LocomotiveScrollContext";

const StateContext = createContext()

export const useStateContext = () => (useContext(StateContext))

export const ContextProvider = ({children}) => {

    const scrollContainerRef = useRef(null)

    const contextValue = {scrollContainerRef}

    return (
        <StateContext.Provider value={contextValue}>
            <AnimationProvider>
                <FloatingCursorProvider>
                    <ImageCardProvider>
                        <MenuProvider>
                            <LocoScrollProvider>
                                {children}
                            </LocoScrollProvider>
                        </MenuProvider>
                    </ImageCardProvider>
                </FloatingCursorProvider>
            </AnimationProvider>
        </StateContext.Provider>
    )
}
