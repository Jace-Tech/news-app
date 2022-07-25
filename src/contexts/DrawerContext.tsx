import React, { createContext, useContext } from "react";
import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer"

import DrawerComponent from "../screens/Drawer"

interface DrawerContextProps {}
const DrawerContext = createContext({}); 

interface DrawerContextProviderProps {} 


const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children }) => { 
    const Drawer = createDrawerNavigator()
    return ( 
        <DrawerContext.Provider value={{}}> 
            <Drawer.Navigator>
                <Drawer.Screen name="SideBar" component={DrawerComponent} />
                {children} 
            </Drawer.Navigator>
        </DrawerContext.Provider> 
    )
}

export default DrawerContextProvider

export const useDrawerContext = () => useContext(DrawerContext);