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

const getSuffix = (day: number) => {
    let suffix = "th"

    if(day === 1 || day === 21 || day === 31) {
        suffix = "st"
    } else if(day === 2 || day === 22) {
        suffix = "nd"
    }
    else if(day === 3 || day === 23) {
        suffix = "rd"
    }
    else {
        suffix = "th"
    }

    return suffix
}

// format IOS Date for human readable eg. 23rd, march 2020
export const formatDate = (date: string): string => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth()
    const year = dateObj.getFullYear()
    const suffix = getSuffix(day)
    return `${day}${suffix}, ${months[month]} ${year}`
}

export const handleFormatDate = (date: string) => {
    const dateArr = date.split(' ').join('T')
    const dateObj = new Date(dateArr)
    return formatDate(dateObj.toISOString())
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