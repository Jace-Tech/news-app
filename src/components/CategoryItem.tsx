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
        <Pressable onPress={() => setCategory(value)} className="p-2">
            <Text>{ name }</Text>
        </Pressable>
    )
}

export default CategoryItem