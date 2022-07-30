import { View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSearchContext } from '../contexts/SearchContext'

const SearchBox = () => {
    const { searchQuery, setSearchText, handleSearch } = useSearchContext()
    return (
        <View className="w-full flex flex-row items-center p-3 bg-gray-200 rounded-lg">
            <TextInput value={searchQuery.query} onChangeText={setSearchText} placeholderTextColor="#999" keyboardAppearance='dark' className="flex-1 text-gray-500 ml-3 text-base" placeholder='Search...' />
            
            <Pressable onPress={handleSearch} className="p-1">
                <Ionicons name="ios-search-outline" size={24} color="#999" />
            </Pressable>
        </View>
    )
}

export default SearchBox