import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'


const NewsCardSkeleton: React.FC = () => {
    return (
        <Pressable className={`mr-5`} style={{ width: Dimensions.get("screen").width / 1.5 }}>
            <View className="h-[150px] bg-gray-300" />
            <View className="p-3 pb-10 bg-gray-200">
                <Text className="h-2 mt-2 bg-gray-100" />
                <Text className="h-2 mt-2 bg-gray-100" />
                <Text className="h-2 mt-2 w-1/2 bg-gray-100" />

                <Text className="h-2 mt-4 w-[70%] bg-gray-100" />
                <Text className="h-2 mt-4 w-[70%] bg-gray-100" />
            </View>
        </Pressable>
    )
}

export default NewsCardSkeleton