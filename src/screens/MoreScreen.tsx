import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { useNewContext } from '../contexts/NewsContext'
import MoreNewsCard from '../components/MoreNewsCard'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const MoreScreen = () => {
    const { news } = useNewContext()
    const { goBack } = useNavigation()
    return (
        <Layout>
            <SafeAreaView className="flex-1 bg-white flex w-full h-full">
                <View className="flex-row items-center px-4 mb-3 py-4 border-b border-gray-300">
                    <Pressable onPress={() => goBack()}>
                        <Ionicons name="ios-arrow-back-outline" size={24} />
                    </Pressable>
                    <Text className="text-xl font-bold ml-3">More News</Text>
                </View>

                <FlatList 
                    data={news}
                    contentContainerStyle={{ width: "100%", paddingHorizontal: 0 }}
                    renderItem={({ item }) => ( <MoreNewsCard id={item._id} title={item.title} image={item.media} date={item.published_date}  /> )}
                />
            </SafeAreaView>
        </Layout>
    )
}

export default MoreScreen