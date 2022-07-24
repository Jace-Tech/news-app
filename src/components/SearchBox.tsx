import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSearchContext } from '../contexts/SearchContext'

const SearchBox = () => {
    const { search, setSearch, handleSearch } = useSearchContext()
    return (
        <View className="w-full flex flex-row items-center p-3 bg-gray-200 rounded-lg">
            <Pressable onPress={handleSearch} className="p-1">
                <Ionicons name="ios-search-outline" size={24} color="#999" />
            </Pressable>

            <TextInput value={search} onChangeText={setSearch} autoCorrect={true} placeholderTextColor="#999" keyboardAppearance='dark' autoFocus className="flex-1 text-gray-500 ml-3 text-base" placeholder='Search...' />
            
            <Pressable onPress={() => { }} className="p-1 ml-2 rounded-md">
                <Ionicons name="ios-options-outline" size={24} color="#777" />
            </Pressable>
        </View>
    )
}

export default SearchBox