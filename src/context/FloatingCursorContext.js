import React, {createContext, useContext, useReducer} from "react";

const FloatingCursorContext = createContext(null)
export const useFloatingCursor = () => (useContext(FloatingCursorContext))

const CURSOR_HOVER = 'CURSOR_HOVER'
const CURSOR_NULL = 'CURSOR_NULL'
const SWIPER_HOVER = 'SWIPER_HOVER'

const floatingCursorReducer = (state, action) => {
    switch (action.type) {
        case CURSOR_HOVER :
            return {
                ...state,
                isSectionHover: true,
                cursorData: action.cursorData,
                cursorArrowsDisplay: action.cursorArrowsDisplay,
            }
        case CURSOR_NULL :
            return {
                ...state,
                isSectionHover: false,
                cursorArrowsDisplay: false,
            }
        case SWIPER_HOVER :
            return {
                ...state,
                swiperHover: action.hover
            }
        default:
            return state
    }
}

export const FloatingCursorProvider = ({children}) => {

    const [state, dispatch] = useReducer(floatingCursorReducer, {
        isSectionHover: false,
        cursorData: '',
        cursorArrowsDisplay: false,
        swiperHover: false,
    })

    const setCursorParams = (cursorData, cursorArrowsDisplay) => dispatch({
        type: CURSOR_HOVER,
        cursorData,
        cursorArrowsDisplay
    })
    const resetCursorParams = () => dispatch({type: CURSOR_NULL})
    const setSwiperHover = (hover) => dispatch({type: SWIPER_HOVER, hover})

    const contextValue = {
        state,
        setCursorParams,
        resetCursorParams,
        setSwiperHover,
    }

    return (
        <FloatingCursorContext.Provider value={contextValue}>
            {children}
        </FloatingCursorContext.Provider>
    )
}
