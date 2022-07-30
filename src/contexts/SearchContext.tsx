import React, { createContext, useCallback, useContext, useEffect } from "react"; 
import { handleSearchNews, NewsParams } from "../api/news";


interface SearchContextProps {
    searchQuery: NewsParams;
    setSearch?: (props: NewsParams) => void;
    setCategory: (search: string) => void;
    handleSearch: () => void;
    category: string;
    setSearchText: (text: string) => void;
    searchResult: any[];
    isLoading: boolean;
}


const SearchContext = createContext<SearchContextProps>(null as any); 

interface SearchContextProviderProps {
    children: React.ReactNode;
} 

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => { 
    const [searchQuery, setSearchQuery] = React.useState<NewsParams>({
        query: "",
        topic: "",
        lang: "en"
    });
    const [category, setCategory] = React.useState<string>("")
    const [searchResult, setSearchResult] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    // Search news
    const handleSearch = useCallback(async () => {
        if(searchQuery.query) {
            setIsLoading(true);
            const result = await handleSearchNews(searchQuery);
    
            if("error" in result) {
                console.log(result.message);
                return
            }
    
            setSearchResult(result.articles);
            setIsLoading(false);
        }
    }, [searchResult, searchQuery]);

    const setSearchText = (text: string) => {
        setSearchQuery({
            ...searchQuery,
            query: text
        })
    }

    // Check if the search query has changed
    useEffect(() => {
        if(searchQuery.query){
            handleSearch();
        }
    }, [searchQuery])

    // Set the search topic
    useEffect(() => {
        setSearchQuery(prev => ({ ...prev, topic: category }))
    }, [category])

    return ( 
        <SearchContext.Provider value={{ searchQuery, handleSearch, category, setCategory, setSearchText, searchResult, isLoading }}> 
            {children} 
        </SearchContext.Provider> 
    )
}

export default SearchContextProvider

export const useSearchContext = () => useContext(SearchContext);