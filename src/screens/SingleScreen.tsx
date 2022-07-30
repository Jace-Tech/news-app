import { View, Text, ImageBackground, Pressable, ScrollView, Dimensions, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useNewContext } from '../contexts/NewsContext'
import Layout from '../components/Layout'
import { getColor, handleRedirect } from '../utils'
import Header from '../components/Header'
import { useSearchContext } from '../contexts/SearchContext'

const SingleScreen = () => {
    const [singleNews, setSingleNews] = useState<any>({})
    const {params} = useRoute()
    const navigation = useNavigation()
    const { news } = useNewContext()
    const { searchResult } = useSearchContext()

    useEffect(() => {
        if(!params) {
            navigation.navigate("Home" as any)
            return
        }

        let oneNews = news.find(news => news._id === params)
        if(!oneNews) {
            oneNews = searchResult.find(news => news._id === params)
            if(!oneNews) {
                navigation.navigate("Home" as any)
                return
            }
        }

        setSingleNews(oneNews)
    }, [])

    return (
        <Layout>
            <Header goBack />
            <ScrollView className="flex-1 bg-white flex w-full h-full">
                <View className={`w-full relative`} style={{ height: Dimensions.get("screen").height / 2.5 }}>
                    <View className="absolute top-0 left-0 h-full w-full bg-black z-10 opacity-50" />
                    <ImageBackground source={{ uri: singleNews?.media }} resizeMode={"cover"} style={{ width: "100%", height: "100%" }}>
                        <View className="px-5 flex w-full h-full justify-end relative z-40">
                            <Text className={"items-center uppercase justify-center flex  rounded-full tracking-widest text-xs font-bold " + `${getColor(singleNews?.topic)}`}>{singleNews?.topic}</Text>
                            <Text className="text-xl mb-12 mt-2 text-white font-bold">{singleNews?.title}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View className="px-5 py-6 -mt-5 flex-1 w-full h-full justify-center rounded-t-3xl bg-white relative z-20">
                    <View className="mb-3 flex flex-row">
                        <Text className="text-sm text-gray-400">Sourced: </Text>
                        <Pressable onPress={() => handleRedirect(singleNews?.link)}>
                            <Text className="text-sm text-blue-400">{singleNews?.clean_url}</Text>
                        </Pressable>
                    </View>
                    <Text className="text-lg font-bold mb-3">Summary</Text>
                    { singleNews?.summary && singleNews?.summary.split("\n").map((paragraph: string, index: any ) => <Text key={index} className="mb-4 text-justify text-base text-gray-600">{ paragraph }</Text>)}
                    <View className="flex justify-center mb-5">
                        <Text className="font-bold text-lg mb-3">Media</Text>

                        { singleNews?.media_content && 
                            <FlatList 
                                horizontal 
                                // contentContainerStyle={{ width: "100%" }}
                                data={singleNews?.media_content} 
                                renderItem={({ item }) => <Image source={{ uri: item }} resizeMode="cover" style={{ width: Dimensions.get("screen").width / 1.5 }} className="h-[150px]" />} 
                            />
                        }
                    </View>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default SingleScreen