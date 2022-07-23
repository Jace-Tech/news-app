import { createContext, useContext, useEffect, useState } from "react";
import { handleGetUsersCountry } from "../api/country";
import { handleFetchNews } from "../api/news";

interface NewsContextProps {
    news: any[],
    brandNews: any,
    topic: string
}

const NewsContext = createContext<NewsContextProps>({} as any);

interface NewsContextProviderProps {}

const NewsContextProvider: React.FC<NewsContextProviderProps> = ({ children }) => {
    const [news, setNews] = useState<any[]>([]);
    const [topic, setTopic] = useState<string>("news");
    const [language, setLanguage] = useState<string>("en");
    const [country, setCountry] = useState<string>("NG");
    const [brandNews, setBrandNews] = useState<any>({});


    const getNews = async () => {
        const countryData = await handleGetUsersCountry() || "NG"
        if("error" in countryData) {
            console.log(countryData.message)
            return;
        }

        const result = await handleFetchNews(countryData.country);
        if("error" in result) {
            console.log(result.message);
            return
        }
        setNews(result.articles as any);
    }

    useEffect(() => {
        if(!news?.length) return
        const newsItem = news[Math.floor(Math.random() * news.length - 1)];
        setBrandNews(newsItem);
    }, [news]);



    // useEffect(() => {
    //     getNews();
    // }, []);


    useEffect(() => {
        console.log("NewsContextProvider: news", news);
    }, [news]);

    return (
        <NewsContext.Provider value={{ news, brandNews, topic  }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider

export const useNewContext = () => useContext(NewsContext);