import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { handleGetUsersCountry } from "../api/country";
import { handleFetchNews } from "../api/news";

interface NewsContextProps {
    news: any[]
    brandNews: any
    options: Options
    setOptions: (options: Options) => void
}

const NewsContext = createContext<NewsContextProps>({} as any);

interface NewsContextProviderProps {}

interface Options {
    country: string
    lang: string
    topic: string
}

const NewsContextProvider: React.FC<NewsContextProviderProps> = ({ children }) => {
    const [news, setNews] = useState<any[]>([]);
    const [options, setOptions] = useState<Options>({
        country: "",
        lang: "en",
        topic: ""
    })
    const [brandNews, setBrandNews] = useState<any>({});

    // Fetch for country
    const getCountry = useCallback(async () => {
        const countryData = await handleGetUsersCountry() || "NG"
        if("error" in countryData) {
            console.log(countryData.message)
            return;
        }
        setOptions(prev => ({ ...prev,  country: countryData.country }))
    }, [options])

    // Get the news
    const getNews = useCallback(async () => {
        const result = await handleFetchNews(options);
        if("error" in result) {
            console.log(result.message);
            return
        }
        setNews(result.articles);
    }, [news])

    // Get random news and set as brand news
    useEffect(() => {
        if(!news?.length) return
        const newsItem = news[Math.floor(Math.random() * news.length - 1)];
        setBrandNews(newsItem);
    }, [news]);

    // Get user's country on page load
    useEffect(() => {
        getCountry();
    }, []);

    // Get news if options changes
    useEffect(() => {
        getNews()
    }, [options])

    return (
        <NewsContext.Provider value={{ news, brandNews, options, setOptions }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider

export const useNewContext = () => useContext(NewsContext);