import React, { createContext, useContext, useState } from "react";
import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer"

interface DrawerContextProps {
    isDrawerOpen: boolean
    setIsDrawerOpen: (isDrawerOpen: boolean) => void
}
const DrawerContext = createContext<DrawerContextProps>({} as any);

interface DrawerContextProviderProps { }

const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContextProvider

export const useDrawerContext = () => useContext(DrawerContext);