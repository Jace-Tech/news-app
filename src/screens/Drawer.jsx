import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { useDrawerContext } from '../contexts/DrawerContext'
import { Feather } from '@expo/vector-icons'
import {Picker} from "@react-native-picker/picker"


const Drawer = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext()
    const {navigate} = useNavigation()

    const links = [
        {
            name: "Home",
            link: "Home"
        },
        {
            name: "Search",
            link: "Search"
        },
        {
            name: "More",
            link: "More"
        }
    ]

    return (
        <>
            { isDrawerOpen && (
                <View className="absolute w-full h-full left-0 top-0 bg-white" style={{ backgroundColor: "rgba(0, 0, 0, .5)", zIndex: 1000}}>
                    <View className="bg-white w-[90%] h-full p-3 py-5">
                        <View className="flex-row justify-end mb-2">
                            <Pressable onPress={() => setIsDrawerOpen(false) } className="p-2 rounded-sm">
                                <Feather name="x" size={24} color="#555" />
                            </Pressable>
                        </View>
                        
                        <View className="mt-2">
                            { links.map(({ link, name }, index) => (
                                <TouchableOpacity key={`${name}-${index}`} onPress={() => navigate(link)} className="py-3 my-1 px-5 w-full border-b border-gray-300 ">
                                    <Text className="text-base font-semibold text-gray-700">{ name }</Text>
                                </TouchableOpacity>
                            )) }
                        </View>

                        <View className="mt-5 px-2">
                            <Text className=" font-semibold text-base">Language</Text>
                            <Picker style={{  }}>
                                <Picker.Item label="English" value="en" />
                            </Picker>
                        </View>
                    </View>
                </View>
            )}
        </>
    )
}

export default Drawer