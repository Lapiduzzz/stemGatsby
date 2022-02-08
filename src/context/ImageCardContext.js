import React, {createContext, useContext, useReducer} from "react";

const ImageCardContext = createContext(null)
export const useImageCard = () => (useContext(ImageCardContext))

const DISPLAY_TOGGLE = 'DISPLAY_TOGGLE'
const SET_IMAGE_CARD = 'SET_IMAGE_CARD'

const imageCardReducer = (state, action) => {
    switch (action.type) {
        case DISPLAY_TOGGLE:
            return {
                ...state,
                imageCardDisplay: action.imageCardDisplay,
            }
        case SET_IMAGE_CARD:
            return {
                ...state,
                whichCard: action.whichCard
            }
        default:
            return state
    }
}

export const ImageCardProvider = ({children}) => {

    const [state, dispatch] = useReducer(imageCardReducer, {
        imageCardDisplay: false,
        whichCard: 'APPROACH',
    },)

    const setImageCardDisplay = (imageCardDisplay) => dispatch({type: DISPLAY_TOGGLE, imageCardDisplay})
    const setImageCard = (whichCard) => dispatch({type: SET_IMAGE_CARD, whichCard})

    const contextValue = {
        state,
        setImageCardDisplay,
        setImageCard
    }

    return (
        <ImageCardContext.Provider value={contextValue}>
            {children}
        </ImageCardContext.Provider>
    )
}
