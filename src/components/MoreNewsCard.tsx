import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { getSubString, handleFormatDate } from '../utils'
import { useNavigation } from '@react-navigation/native'

interface MoreNewsCardProps {
    title: string,
    image: string,
    date: string,
    id: string,
} 

const MoreNewsCard:React.FC<MoreNewsCardProps> = ({ date, title, image, id  }) => {
    const { navigate } = useNavigation()
    handleFormatDate(date) 
    return (
        <Pressable onPress={() => navigate("Single" as never, id as never)} className="my-3 px-4 py-2 h-[120px] bg-white flex flex-row shadow-2xl" style={{ elevation: 10 }}>
            <View className="w-28 overflow-hidden rounded-lg">
                <Image source={{ uri: image }} resizeMode={"cover"} style={{ width: "100%", height: "100%" }} />
            </View>

            <View className="flex-1 ml-3 flex">
                <Text className="text-lg font-bold leading-6">{ getSubString(title, 6) }</Text>
                {/* <Text className="text-sm mt-3 text-gray-600"></Text> */}
            </View>
        </Pressable>
    )
}

export default MoreNewsCard