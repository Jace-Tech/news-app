import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import NewsCardSkeleton from "./NewsCardSkeleton"

const HomeSkeleton = () => {
    return (
        <View className="w-full h-full ">
            <StatusBar backgroundColor={"gray"} />
            <View className="h-[50%] flex bg-gray-300 relative">
                <View className="absolute bottom-0 left-0 w-full h-fit p-5">
                    <View className="p-3 bg-gray-200 w-6/12 rounded-full " />
                    <View className="p-1 mt-4 bg-gray-200 rounded-full " />
                    <View className="p-1 mt-3 bg-gray-200 rounded-full " />
                    <View className="p-1 mt-3 bg-gray-200 rounded-full " />
                    <View className="p-6 mt-4 bg-gray-200 rounded-md w-1/3 " />
                </View>
            </View>

            <View className="flex-1 p-4">
                <FlatList data={new Array(3).fill("")} horizontal renderItem={({}) => (
                    <NewsCardSkeleton />
                )} />
            </View>
        </View>
    ) 
}

export default HomeSkeleton