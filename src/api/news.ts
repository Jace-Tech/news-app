import { categories } from './../utils/index';

const API_OPTIONS: RequestInit | any = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key':  process.env.API_KEY,
		'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
	}
};

export interface NewsParams {
    topic: string
    country?: string
    lang: string
    query?: string
}

export const handleFetchNews = async ({ lang, country, topic}: NewsParams) => {
    try{
        const request = await fetch(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=${topic}&lang=${lang}&country=${country}&media=True`, API_OPTIONS)
        const response = await request.json()
        return response
    }
    catch(err: any) {
        return { error: true, message: err.message }
    }
}

export const handleSearchNews = async ({ lang, country, topic, query}: NewsParams) => {
    try{
        const request = await fetch(`https://newscatcher.p.rapidapi.com/v1/search?q=${query}&topic=${topic}&lang=${lang}&media=True`, API_OPTIONS)
        const response = await request.json()
        return response
    }
    catch(err: any) {
        return { error: true, message: err.message }
    }
}
