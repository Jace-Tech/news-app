import { View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useDrawerContext } from '../contexts/DrawerContext'

interface HeaderProps {
    goBack?: boolean,
    dark?: boolean
}

const Header: React.FC<HeaderProps> = ({ goBack, dark }) => {
    const { goBack: redirectBack } = useNavigation()
    const { setIsDrawerOpen } = useDrawerContext()
    return (
        <View className="absolute top-0 left-0 flex flex-row items-center justify-between py-4 px-2 z-50">
            {goBack ? (
                <Pressable onPress={() => redirectBack()} className="mr-4 p-2">
                    <Ionicons name="ios-arrow-back" size={24} color={dark ? "#1e1e1e" : "#ccc"} />
                </Pressable>
            ) : (
                <Pressable onPress={() => setIsDrawerOpen(true)} className="mr-4 p-2">
                    <Ionicons name="ios-menu-outline" size={32} color={dark ? "#1e1e1e" : "#eee"} />
                </Pressable>
            )}
        </View>
    )
}

export default Header