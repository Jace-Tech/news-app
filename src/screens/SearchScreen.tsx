import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import { categories } from '../utils'
import CategoryItem from '../components/CategoryItem'
import { useSearchContext } from '../contexts/SearchContext'



const SearchScreen = () => {
    const { category } = useSearchContext()
    return (
        <Layout>
            <View className="flex-1 px-4">
                <Header dark />
                <View className="mt-20">
                    <Text className="text-3xl font-semibold">Discover</Text>
                    <Text className="text-base text-gray-500">News from all over the world </Text>

                    <View className="mt-5">
                        <SearchBox />
                    </View>
                </View>
                <ScrollView>
                    <FlatList 
                        horizontal 
                        data={categories}  
                        keyExtractor={({ name }, index) => `${name}-${index}`}
                        renderItem={({ item }) => (
                            <CategoryItem name={item.name} value={item.value} isActive={category === item.value}  />
                        )}
                    />
                </ScrollView>
            </View>
        </Layout>
    )
}

export default SearchScreen