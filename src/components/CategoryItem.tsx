import { Text, Pressable } from 'react-native'
import React from 'react'
import { useSearchContext } from '../contexts/SearchContext';

interface CategoryItemProps {
    isActive: boolean;
    name: string;
    value: string;
} 

const CategoryItem:React.FC<CategoryItemProps> = ({ isActive, name, value }) => {
    const { setCategory, category } = useSearchContext()

    return (
        <Pressable onPress={() => setCategory(value)} className={`p-3 pb-2 ${isActive && "border-b-4 border-gray-500"}`}>
            <Text className={`text-base capitalize text-gray-700 tracking-wide font-bold`}>{ name }</Text>
        </Pressable>
    )
}

export default CategoryItem