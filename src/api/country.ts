export const handleGetUsersCountry: any =  async () => {
    try {
        const country = await fetch("https://ipapi.co/json/")
        const countryData = await country.json()
        return countryData
    }
    catch (err: any) {
        return { error: true, message: err.message }
    } 
}