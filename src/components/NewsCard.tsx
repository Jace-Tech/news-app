import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { getSubString } from '../utils';

interface NewsCardProps {
    title: string;
    id: string;
    author: string;
    image: string;
    date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, date, id, author }) => {
    const navigation = useNavigation()
    const route = "Single" as never
    const _id = id as never
    return (
        <Pressable onPress={() => navigation.navigate(route, _id )} className={`mr-5`} style={{ width: Dimensions.get("screen").width / 1.5 }}>
            <View className="relative rounded-xl overflow-hidden ">
                <View className="absolute top-0 left-0 w-full h-full z-10" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
                { image ? (
                    <Image source={{ uri: image }} fadeDuration={1000} className={"w-full h-[150px]"} resizeMode="cover"/>
                ) : (
                    <Image source={require("../../assets/nopic.png")} fadeDuration={1000} className={"w-full h-[150px]"} resizeMode="cover"/>
                ) }
                
            </View>
            <View className="p-3">
                <Text className="text-lg font-bold ">{ getSubString(title, 7) }</Text>
                <Text className="text-sm text-gray-500">{ "3 days ago" }</Text>
                <Text className="text-sm text-gray-500">{ author }</Text>
            </View>
        </Pressable>
    )
}

export default NewsCard