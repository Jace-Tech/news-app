import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
    goBack?: boolean
}

const Header: React.FC<HeaderProps> = ({ goBack }) => {
    const { goBack: redirectBack } = useNavigation()
    return (
        <View className="absolute top-0 left-0 flex flex-row items-center justify-between py-5 px-2 z-50">
            {goBack ? (
                <Pressable onPress={() => redirectBack()} className="mr-4 p-2">
                    <Ionicons name="ios-arrow-back" size={24} color="#ccc" />
                </Pressable>
            ) : (
                <Pressable onPress={() => { }} className="mr-4 p-2">
                    <Ionicons name="ios-menu-outline" size={30} color="#eee" />
                </Pressable>
            )}
        </View>
    )
}

export default Header