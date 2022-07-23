import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useNewContext } from '../contexts/NewsContext'
import Layout from '../components/Layout'

const SingleScreen = () => {
    const [singleNews, setSingleNews] = useState<any>({})
    const {params} = useRoute()
    const navigation = useNavigation()
    const { news } = useNewContext()

    useEffect(() => {
        if(!params) {
            navigation.navigate("Home" as any)
            return
        }

        const oneNews = news.find(news => news.id === params)
        if(!oneNews) {
            navigation.navigate("Home" as any)
            return
        }

        setSingleNews(oneNews)
    }, [])




    return (
        <Layout>
            
        </Layout>
    )
}

export default SingleScreen