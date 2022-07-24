import * as WebBrowser from 'expo-web-browser';


const NEWS_COLOR = "text-blue-400"
const ENTERTAINMENT_COLOR = "text-purple-600"
const SPORT_COLOR = "text-gray-500"
const WORLD_COLOR = "text-blue-700"
const TECH_COLOR = "text-white"
const FINANCE_COLOR = "text-green-500"
const ECONOMICS_COLOR = "text-slate-500"
const BUSINESS_COLOR = "text-slate-500"
const TRAVEL_COLOR = "text-purple-600"
const MUSIC_COLOR = "text-pink-600"
const SCIENCE_COLOR = "text-orange-500"

export const categories = [
    {
        name: "all",
        value: ""
    },
    {
        name: "news",
        value: "news"
    },
    {
        name: "technology",
        value: "tech"
    },
    {
        name: "sports",
        value: "sport"
    },
    {
        name: "world",
        value: "world"
    },
    {
        name: "finance",
        value: "finance"
    },
    {
        name: "science",
        value: "science"
    },
    {
        name: "economics",
        value: "economics"
    },
    {
        name: "travel",
        value: "travel"
    },
    {
        name: "music",
        value: "music"
    },
    {
        name: "business",
        value: "business"
    }
] 

interface SubString {
    (str: string, length?: number): string
}

export const getSubString: SubString = (str, length = 8): string  => {
    const wordsArr = str.split(' ')
    if(wordsArr.length <= length) {
        return str
    }
    const result = wordsArr.slice(0, length).join(' ')
    return `${result}...`
}

export const handleRedirect = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
}

export const handleFormatDate = async (date: string) => {
    const dateArr = date.split('').join('T')
    // console.log(dateArr)
    // const dateObj = new Date(dateArr)
    // const dateString = dateObj.toLocaleDateString()

    // console.log(dateString)
    // return dateString
}

export const getColor = (topic: string): string=> {
    switch(topic) {
        case "news":
            return NEWS_COLOR
        case "entertainment":
            return ENTERTAINMENT_COLOR
        case "sport":
            return SPORT_COLOR
        case "world":
            return WORLD_COLOR
        case "tech":
            return TECH_COLOR
        case "finance":
            return FINANCE_COLOR
        case "economics":
            return ECONOMICS_COLOR
        case "business":
            return BUSINESS_COLOR
        case "travel":
            return TRAVEL_COLOR
        case "music":
            return MUSIC_COLOR
        case "science":
            return SCIENCE_COLOR
        default:
            return "text-gray-500"
    }
}