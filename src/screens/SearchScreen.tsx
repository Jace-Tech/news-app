import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import { categories } from '../utils'
import CategoryItem from '../components/CategoryItem'
import { useSearchContext } from '../contexts/SearchContext'
import MoreNewsCard from '../components/MoreNewsCard'
import { useNewContext } from '../contexts/NewsContext'
import Drawer from './Drawer'



const SearchScreen = () => {
    const { category, searchQuery, searchResult, isLoading } = useSearchContext()
    const { news } = useNewContext()

    return (
        <Layout>
            <Drawer />
            <View className="flex-1 bg-white px-4">
                <Header dark />
                <View className="mt-20">
                    <Text className="text-3xl font-semibold">Discover</Text>
                    <Text className="text-base text-gray-500">News from all over the world </Text>
                </View>

                <View className="mt-5">
                    <SearchBox />
                </View>

                <View>
                    <View className="mt-">
                        <FlatList
                            horizontal
                            data={categories}
                            keyExtractor={({ name }, index) => `${name}-${index}`}
                            renderItem={({ item }) => (
                                <CategoryItem name={item.name} value={item.value} isActive={category === item.value} />
                            )}
                        /> 
                    </View>
                    
                    <View className="mt-4">
                        <Text className="text-xl pb-3 border-b border-gray-400 font-semibold">{ searchQuery.query || "Latest" }</Text>
                    </View>
                
                    <View className="flex-1">
                        {isLoading ? (
                            <View className="flex-1 items-center justify-center">
                                <ActivityIndicator size="large" color="#999" />
                            </View>
                        ): searchResult?.length ? (
                            <FlatList 
                                data={searchResult}
                                keyExtractor={({ _id }, index) => `${_id}-${index}`}
                                contentContainerStyle={{ width: "100%", paddingHorizontal: 0 }}
                                renderItem={({ item }) => ( <MoreNewsCard id={item._id} title={item.title} image={item.media} date={item.published_date}  /> )}
                            />
                        ): (
                            <FlatList 
                                data={news}
                                keyExtractor={({ _id }, index) => `${_id}-${index}`}
                                contentContainerStyle={{ width: "100%", paddingHorizontal: 0 }}
                                renderItem={({ item }) => ( <MoreNewsCard id={item._id} title={item.title} image={item.media} date={item.published_date}  /> )}
                            />
                        ) }
                    </View>
                </View>
            </View>
        </Layout>
    )
}

export default SearchScreen