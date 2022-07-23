
const API_OPTIONS: RequestInit | any = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key':  process.env.API_KEY,
		'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
	}
};

export const handleFetchNews = async (country?: string) => {
    try{
        const request = await fetch(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?&lang=en&country=${country}&media=True`, API_OPTIONS)
        const response = await request.json()

        console.log(response)
        return response
    }
    catch(err: any) {
        return { error: true, message: err.message }
    }
}
