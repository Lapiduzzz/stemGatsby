import React, {createContext, useContext, useState} from "react";

const MenuContext = createContext()

export const useMenuContext = () => (useContext(MenuContext))

export const MenuProvider = ({children}) => {

    const [menuDisplay, setMenuDisplay] = useState(false)

    const contextValue = {menuDisplay, setMenuDisplay}

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    )
}
