import { View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


interface FooterLinkProps {
    name: string;
    icon: string;
    isActive: boolean;
    handleClick: () => void;
}

const FooterItem: React.FC<FooterLinkProps> = ({ icon, isActive, name, handleClick }) => {
    const setIcon: any = isActive ? `ios-${icon}` : `ios-${icon}-outline`
    return(
        <Pressable className="p-3 mx-5" onPress={handleClick}>
            <Ionicons name={setIcon} size={24} color="black" />
        </Pressable>
    )
}

const Footer = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const handleClick = (name: string) => {
        navigation.navigate(name as any)
    }

    interface Link {
        id: string,
        name: string,
        icon: string
    }
    
    const footerLinks: Link[]  = [
        {
            id: "home--001",
            name: "Home",
            icon: "home"
        },
        {
            id: "search--002",
            name: "Search",
            icon: "search"
        },
        {
            id: "user--003",
            name: "More",
            icon: "grid"
        }
    ]

    return (
        <View className={"align-bottom bg-white l-0 p-3 py-1 border-t-gray-300 border-t w-full flex flex-row items-center justify-center"}>
            { footerLinks.map(link => <FooterItem isActive={route.name === link.name} handleClick={() => handleClick(link.name)} key={link.id} {...link} />) }
        </View>
    )
}

export default Footer