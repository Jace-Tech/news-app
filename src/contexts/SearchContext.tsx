import React, { createContext, useContext, useEffect } from "react"; 


interface SearchContextProps {
    search: string;
    setSearch: (search: string) => void;
    setCategory: (search: string) => void;
    handleSearch: () => void;
    category: string;
}

const SearchContext = createContext<SearchContextProps>(null as any); 

interface SearchContextProviderProps {
    children: React.ReactNode;
} 

const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => { 
    const [search, setSearch] = React.useState<string>("");
    const [category, setCategory] = React.useState<string>("")

    const handleSearch = () => {}

    useEffect(() => {
        console.log(search)
    }, [search])

    return ( 
        <SearchContext.Provider value={{ search, setSearch, handleSearch, category, setCategory }}> 
            {children} 
        </SearchContext.Provider> 
    )
}

export default SearchContextProvider

export const useSearchContext = () => useContext(SearchContext);