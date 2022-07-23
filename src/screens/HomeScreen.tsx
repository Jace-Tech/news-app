import { View, Text, ImageBackground, Dimensions, Pressable, FlatList } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { useNewContext } from '../contexts/NewsContext';
import { Ionicons } from '@expo/vector-icons';
import HomeSkeleton from '../skeletons/HomeSkeleton';
import NewsCard from '../components/NewsCard';
import { useNavigation } from '@react-navigation/native';
import { getColor } from '../utils';
import Header from '../components/Header';


const HomeScreen = () => {
    const { news, brandNews, topic } = useNewContext();
    const {navigate} = useNavigation();

    if(!news?.length) {
        return (
            <HomeSkeleton />
        )
    }
    
    return (
        <Layout>
            <Header />
            <View className="w-full h-full">
                <View className="h-[45%] relative">
                    <View className="absolute top-0 left-0 h-full w-full bg-black z-10 opacity-75" />
                    <ImageBackground source={{ uri: brandNews?.media }} resizeMode={"cover"} style={{ width: "100%", height: "100%" }}>
                        <View className="px-5 flex w-full h-full justify-end relative z-40">
                            <Text className={"items-center uppercase justify-center flex rounded-full tracking-wides text-xs font-bold" + ` ${ getColor(topic) }`}>{ topic }</Text>
                            <Text className="text-xl mt-2 text-white font-bold">{ brandNews?.title }</Text>
                            <Pressable className="my-4 py-1 flex items-center flex-row" onPress={() => navigate("Single" as never, brandNews._id as never)}>
                                <Text className="text-white font-bold mr-2">Read More</Text>
                                <Ionicons name="ios-arrow-forward" size={22} color="white" />
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>

                <View className="flex-1 w-full px-4 flex">
                    <View className="flex flex-row items-center justify-between py-3">
                        <Text className="text-xl font-bold capitalize">All news</Text>

                        <Pressable className="flex flex-row items-center" onPress={() => navigate("More" as any)}>
                            <Text className="text-sm text-gray-600 mr-2"> More</Text>
                            <Ionicons name="ios-arrow-forward" size={20} color="gray" />
                        </Pressable>
                    </View>

                    <FlatList 
                        data={news.filter(item => item !== brandNews).slice(0, 5)} 
                        keyExtractor={(item) => item._id} 
                        decelerationRate="fast"
                        snapToAlignment='start'
                        snapToInterval={Dimensions.get("screen").width / 1.4 }
                        horizontal
                        contentContainerStyle={{alignItems: 'stretch'}}
                        renderItem={({ item }) => (
                            <NewsCard id={item._id} image={item.media} author={item.author} title={item.title} date={item.published_date} />
                    )} />
                </View>
            </View>
        </Layout>
    )
}

export default HomeScreen