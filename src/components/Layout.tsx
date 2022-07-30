import { View } from 'react-native'
import React, { ReactNode } from 'react'
import Footer from './Footer'

interface Props {
    children: ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <View className={"w-full h-full flex relative"}>
            <View className={"w-full h-full flex-1"}>
                {children}
            </View>
            <Footer />
        </View>
    )
}

export default Layout